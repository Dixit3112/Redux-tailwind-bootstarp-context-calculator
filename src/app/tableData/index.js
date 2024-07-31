import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./table.scss";
import { Button } from "@mui/material";

export default function Table() {
  const [storeValue, setStoreValue] = useState(
    JSON.parse(localStorage.getItem("user")) || []
  );

  const navigate = useNavigate();

  const handleEdit = (index) => {
    navigate(`/login/${index}`);
  };

  const handleDelete = (index) => {
    let updateData = storeValue.filter((user, i) => i !== index);
    setStoreValue(updateData);
    localStorage.setItem("user", JSON.stringify([...updateData]));
  };

  return (
    <>
      <div className="centerTable flex gap-10">
        <table>
          <tr className="text-xl py-[10px] h-11">
            <th>Sr</th>
            <th>Name</th>
            <th>Password</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
          {storeValue.map((el, index) => (
            <tr key={index} className="dataRow h-12 text-lg mt-3">
              <td>{index + 1}</td>
              <td>{el.username}</td>
              <td>{el.password}</td>
              <td>
                <Button
                  varient="contained"
                  onClick={() => handleEdit(index)}
                  className="btn1 font-bold"
                >
                  Edit
                </Button>
              </td>
              <td>
                <Button
                  varient="contained"
                  onClick={() => handleDelete(index)}
                  className="btn2 font-bold"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </table>
        <Button
          varient="contained"
          onClick={() => navigate("/login")}
          className="btn1 w-28 p-5 bg-blue-800 rounded-lg"
        >
          Back to Login form
        </Button>
      </div>
    </>
  );
}
