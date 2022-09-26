import { useState } from "react";
import {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from "../features/services/api";
import { useNavigate } from "react-router-dom";

const Todo = () => {
  const initialTodoState = {
    userId: 1,
    title: "",
    completed: false,
  };
  const [newTodo, setnewTodo] = useState(initialTodoState);
  const { data, isLoading, isFetching, isSuccess, error } = useGetTodosQuery();
  const [addTodo] = useAddTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  const navigate = useNavigate();
  console.log(isLoading, isFetching, isSuccess);
  return (
    <>
      <button onClick={() => navigate("counter")}>Counter</button>
      <>
        <form>
          <input
            type="text"
            value={newTodo.value}
            onChange={(e) =>
              setnewTodo((prevState) => ({
                ...prevState,
                title: e.target.value,
              }))
            }
          />
          <button
            type="button"
            onClick={() => addTodo(newTodo)}
            disabled={newTodo.title.length === 0}
          >
            Add
          </button>
        </form>
      </>
      <div>{isLoading && <h1>Loading...</h1>}</div>
      <div>
        {!isLoading && (
          <div>
            {data?.map((todo) => (
              <div key={todo.id}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => {
                    updateTodo({
                      id: todo.id,
                      title: todo.title,
                      userId: todo.userId,
                      completed: !todo.completed,
                    });
                  }}
                />
                <label htmlFor={todo.id}>{todo.title}</label>
                <button onClick={() => deleteTodo({ id: todo.id })}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Todo;
