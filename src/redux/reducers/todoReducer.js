import {
  ADD_TODO,
  DELETE_TODO,
  CLEAR_ALL_TODO,
  EDIT_TODO,
  UPDATE_TODO,
  MARK_COMPLETED,
  RESET_EDIT,
} from "../actions/actionTypes";

const initialState = {
  todos: [
    {
      id: 1,
      title: "TodoList 1",
      description: "This is first todo",
      isCompleted: false,
      isPending: true,
    },
    {
      id: 2,
      title: "TodoList 2",
      description: "This is second todo",
      isCompleted: false,
      isPending: true,
    },
    {
      id: 3,
      title: "TodoList 3",
      description: "This is third todo",
      isCompleted: false,
      isPending: true,
    },
  ],
  isEdit: false,
  editTodo: {},
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { id, title, description } = action.payload;
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: id,
            title: title,
            description: description,
            isCompleted: false,
            isPending: true,
          },
        ],
        isEdit: action.isEdit,
      };
    case DELETE_TODO:
      const newTodoList = state.todos.filter((item) => item.id !== action.id);
      return {
        ...state,
        todos: [...newTodoList],
      };

    case EDIT_TODO:
      const editTodo = action.payload;
      let newEditTodo = state?.todos?.find((item) => item?.id === editTodo?.id);
      return {
        ...state,
        isEdit: action.isEdit,
        editTodo: newEditTodo,
      };

    case UPDATE_TODO:
      const { todoId, todoTitle, todoDescription } = action.payload;
      
      let todos = state.todos.map((value) => {
        if (value.id === todoId) {
          value.title = todoTitle;
          value.description = todoDescription;
        }
        return value;
      });

      return {
        ...state,
        todos: [...todos],
        isEdit: false,
      };

    case MARK_COMPLETED:
      const { selectedTodoId } = action.payload;
      let allTodos = state.todos.map((value) => {
        selectedTodoId.forEach((id) => {
          if (value.id === id) {
            value.isCompleted = !value.isCompleted;
            value.isPending = !value.isPending;
          }
        });
        return value;
      });

      
      return {
        ...state,
        todos: [...allTodos],
      };

    case CLEAR_ALL_TODO:
      return {
        ...state,
        todos: [],
      };
    case RESET_EDIT:
      return {
        ...state,
        editTodo:-1,
        isEdit:false
      }

    default:
      return state;
  }
};
export default todoReducer;
