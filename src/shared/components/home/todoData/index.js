import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { GiFireworkRocket } from "react-icons/gi";
import { MdDelete } from "react-icons/md";

export default function ToDoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [iconRed, setIconRed] = useState("black");
  const [iconColor, setIconColor] = useState("black");

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    const newTask = {
      id: Date.now(),
      description: task,
      done: false,
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  const handleCheckboxChange = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="bg-indigo-200 mt-32 w-full h-svh flex flex-col justify-start items-center">
      <h1 className="text-4xl font-serif mb-4 font-extrabold text-fuchsia-600">
        To-Do List
      </h1>
      <form onSubmit={handleSubmit} className="text-lg font-serif">
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Enter task..."
          className="border-2 border-black w-[300px] px-4 py-2 mx-2 rounded-xl"
        />
        <button type="submit">
          <Button variant="contained">Add Task</Button>
        </button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex flex-row justify-center items-center my-4"
          >
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => handleCheckboxChange(task.id)}
            />
            <span
              style={{ textDecoration: task.done ? "line-through" : "none" }}
              className="text-lg font-semibold text-uppercase w-[500px] flex hover:text-xl transition-all cursor-pointer"
            >
              {task.description}
            </span>
            <span>
              <FaEdit
                style={{ color: iconColor }}
                value={iconColor.id}
                onClick={(task) =>
                  setIconColor(iconColor === "black" ? "blue" : "black")
                }
              />
            </span>
            <span>
              <MdDelete
                id={task.id}
                style={{ color: iconRed }}
                className="text-slate-600"
                // onClick={() =>
                onClick={() => {
                  setIconRed(iconColor === "black" ? "red" : "black");
                }}
              />
            </span>
          </li>
        ))}
      </ul>
      <Button variant="contained" startIcon={<GiFireworkRocket />}>
        done
      </Button>
    </div>
  );
}
