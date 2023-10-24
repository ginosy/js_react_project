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
  editTodoId: "",
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
      const newTodoList = state.todos.filter((item) => item.id != action.id);
      return {
        ...state,
        todos: newTodoList,
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
      // const todos = state.todos.filter((todo) => {
      //   return todo.id !== todoId;
      // });

      // const todo = state.todos.find((todo) => todo?.id === todoId);
      // todo.title = todoTitle;
      // todo.description = todoDescription;
      // todo.isCompleted = todo?.isCompleted;
      // todo.isPending = todo?.isPending;
      // todos.push(todo);

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
      console.log(selectedTodoId);
      let allTodos = state.todos.map((value) => {
        selectedTodoId.forEach((id) => {
          if (value.id === id) {
            value.isCompleted = true;
            value.isPending = false;
          }
        });
        return value;
      });

      //   const selectedTodo = state.todos.find((todo) => todo?.id === id);
      //   selectedTodo.title = selectedTodo?.title;
      //   selectedTodo.description = selectedTodo?.description;
      //   selectedTodo.isCompleted = true;
      //   selectedTodo.isPending = false;
      //   allTodos.push(selectedTodo);
      // });

      return {
        ...state,
        todos: [...allTodos],
        isEdit: false,
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
      }

    default:
      return state;
  }
};
export default todoReducer;
