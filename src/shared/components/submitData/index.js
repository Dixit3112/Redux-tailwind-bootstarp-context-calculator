import React, { useEffect, useState } from "react";
import "./todo.scss";
import { useNavigate, useParams } from "react-router-dom";

export default function ToDoData() {
  const params = useParams();
  const storeValue = JSON.parse(localStorage.getItem("todos")) || [];
  const [todo, setTodo] = useState({ name: "", email: "", password: "" });

  useEffect(() => {
    if (params?.id) {
      setTodo(storeValue[params.id]);
    }
  }, []);

  const handleChange = (element) => {
    const { name, value } = element.target;
    const updatedTodo = { ...todo, [name]: value };
    setTodo(updatedTodo);
  };

  const handleSubmit = () => {
    if (params?.id) {
      let updatedTodos = storeValue.map((el, ind) => {
        return ind === parseInt(params.id) ? todo : el;
      });
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    } else {
      localStorage.setItem("todos", JSON.stringify([...storeValue, todo]));
    }
    setTodo(storeValue);
  };

  const handleEdit = () => {
    const updatedTodos = storeValue(
      (el, ind) => {
        return ind === parseInt(params.id) ? todo : el;
      },
      { ...todo, isEditing: true },
      localStorage.setItem("todos", JSON.stringify(updatedTodos))
    );
  };

  const handleDelete = () => {
    const updatedTodos = storeValue.filter(
      (_, ind) => ind !== parseInt(params.id)
    );
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  return (
    <div className="login-bg">
      <div className="containers">
        <div className="login">
          <form>
            <h1>{params.id ? "Edit Todo" : "Add Todo"}</h1>
            <label>
              Full Name:
              <input
                required
                value={todo.name}
                type="text"
                name="name"
                onChange={(ele) => handleChange(ele)}
              />
            </label>
            <label>
              Email:
              <input
                required
                value={todo.email}
                type="text"
                name="email"
                onChange={(ele) => handleChange(ele)}
              />
            </label>
            <label>
              Password:
              <input
                required
                value={todo.password}
                type="password"
                name="password"
                onChange={(ele) => handleChange(ele)}
              />
            </label>
            <div className="btn w-[1000px] flex justify-center my-3">
              <button
                type="button"
                onClick={() => handleSubmit()}
                className="py-3 px-4 bg-slate-800 hover:{bg-green-800} rounded-lg"
              >
                {params.id ? "Update" : "Submit"}
              </button>
              {params.id && (
                <button
                  type="button"
                  onClick={() => handleDelete()}
                  className="py-3 px-4 bg-slate-800 hover:{bg-green-800} rounded-lg"
                >
                  Delete
                </button>
              )}
            </div>
          </form>
        </div>
        <table>
          {storeValue.map((el, ind) => (
            <tr key={ind}>
              <td>{el.name}</td>
              <td>{el.email}</td>
              <td>{el.password}</td>
              <td>
                <button
                  type="button"
                  onClick={() => handleDelete(ind)}
                  className="py-3 px-4 bg-slate-800 hover:{bg-green-800} rounded-lg"
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => handleEdit(el)}
                  className="py-3 px-4 bg-slate-800 hover:[bg-green-600] rounded-lg"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
