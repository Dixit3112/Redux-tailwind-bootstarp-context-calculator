import React, { useState } from "react";

export default function SignUpForm() {
  const [user, setUser] = useState([]);
  const [errors, setErrors] = useState({});
  const validate = () => {
    let error = [];
    if (!user.username) {
      error.username = "* Please provide UserName";
    }
    if (!user.email) {
      error.email = "* Please provide Email";
    }
    if (!user.password) {
      error.password = "* Please provide Password";
    }
    setErrors(errors);
    return errors === undefined ? null : error;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('The form was submitted:', user);
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length > 0) {
      alert("Signed Up Successfully");
    } else {
      alert("Please check the fields");
    }
    setUser(user);
  };

  return (
    <div className="mt-[110px] bg-green-400 flex flex-col items-center justify-between">
      <h1>SignUpForm</h1>
      <form
        action="/signup"
        method="post"
        className="w-[350px] grid grid-cols-2"
      >
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          className="border border-black rounded-lg w-48"
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          className="border border-black rounded-lg w-48"
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          className="border border-black rounded-lg w-48"
        />
        <div className="btn flex justify-center">
          <button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            className="w-[100px] text-center border border-green-950 rounded-xl text-fuchsia-500 font-extrabold text-xl p-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
