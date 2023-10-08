import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTodo,
  editTodo,
  markTodoCompleted,
  clearAlltodo,
} from "../redux/actions";

export const TodoLists = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  const [todoLists, setTodoLists] = useState(todos);
  const dispatch = useDispatch();
  const [selectedTodo, setSelectedTodo] = useState([]);
  const [all, setAll] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [incompleted, setIncompleted] = useState(false);

  useEffect(() => {
    setTodoLists(todos);
  }, [todos]);

  const handleAllClick = () =>{
    setAll(true);
    setCompleted(false);
    setIncompleted(false);
    setTodoLists(todos);
  }
  const handleCompletedClick = () =>{
    setAll(false);
    setCompleted(true);
    setIncompleted(false);
    setTodoLists(todos.filter(todo =>todo.isCompleted === true));
  }
  const handleIncompletedClick = () =>{
    setAll(false);
    setCompleted(false);
    setIncompleted(true);
    setTodoLists(todos.filter(todo =>todo.isCompleted === false));
  }

  const actionClick = (data) => {
    if (data && data?.type === "edit") {
      dispatch(editTodo(data?.todo?.id));
    } else if (data && data?.type === "delete") {
      dispatch(deleteTodo(data?.todo?.id));
    }
  };

  const changeEvent = (e, todoId) => {
    if (e?.target?.name !== "select_all_todo" && e?.target?.checked === true) {
      if (selectedTodo.indexOf(todoId) === -1) {
        setSelectedTodo((todo) => [...todo, todoId]);
      }
    } else if (
      e?.target?.name !== "select_all_todo" &&
      e?.target?.checked === false
    ) {
      const todos = selectedTodo.filter((todo) => todo !== todoId);
      setSelectedTodo(todos);
    }

    if (e?.target?.name === "select_all_todo" && e?.target?.checked === true) {
      todos &&
        todos.forEach((todo, index) => {
          const allChkbox = document.getElementsByName(`todo_${index}`);

          for (let chk of allChkbox) {
            chk.checked = true;
            let todoId = todo?.id;

            setSelectedTodo((todo) => [...todo, todoId]);
          }
        });
    } else if (
      e?.target?.name === "select_all_todo" &&
      e?.target?.checked === false
    ) {
      todos &&
        todos.forEach((todo, index) => {
          const allChkbox = document.getElementsByName(`todo_${index}`);
          for (let chk of allChkbox) {
            chk.checked = false;
            setSelectedTodo([]);
          }
        });
    }
  };

  const markCompleted = () => {
    dispatch(markTodoCompleted(selectedTodo));
  };

  return (
    <div className="container my-2">
      <div className="row pb-4" style={{ height: "60px" }}>
        <div className="col-xl-12 text-right">
          {selectedTodo.length > 0 && (
            <>
              <button
                className="btn btn-danger"
                onClick={() => dispatch(clearAlltodo())}
              >
                Clear Todos
              </button>
              <button className="btn btn-success ml-2" onClick={markCompleted}>
                Mark As Completed
              </button>
            </>
          )}
        </div>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th width="3%">
              <input
                type={"checkbox"}
                onChange={(e) => changeEvent(e)}
                name={"select_all_todo"}
              />
            </th>
            <th width="30%">Name</th>
            <th width="42%">Description</th>
            <th width="8%">Status</th>
            <th width="20%">Action</th>
          </tr>
        </thead>

        <tbody>
          {todoLists &&
            todoLists.map((todo, index) => (
              <tr key={index}>
                <td>
                  <input
                    type={"checkbox"}
                    value={todo?.id}
                    onChange={(e) => changeEvent(e, todo?.id)}
                    name={`todo_${index}`}
                  />
                </td>
                <td>{todo?.title}</td>
                <td>{todo?.description}</td>
                <td>
                  {todo?.isCompleted
                    ? "Completed"
                    : todo?.isPending
                    ? "Pending"
                    : ""}
                </td>
                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => actionClick({ todo: todo, type: "edit" })}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm ml-1"
                    onClick={() => actionClick({ todo: todo, type: "delete" })}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div>
        <div class="d-flex mt-5 btn-group" role="group">
          <button type="button" class={`btn ${all ? 'btn-primary' : 'btn-secondary'}`} onClick={handleAllClick}>
            All
          </button>
          <button type="button" class={`btn ${completed ? 'btn-primary' : 'btn-secondary'}`} onClick={handleCompletedClick}>
            Completed
          </button>
          <button type="button" class={`btn ${incompleted ? 'btn-primary' : 'btn-secondary'}`} onClick={handleIncompletedClick}>
            Pending
          </button>
        </div>
      </div>
    </div>
  );
};
