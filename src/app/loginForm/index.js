import React, { useEffect, useState } from "react";
import "./login.scss";
import { useNavigate, useParams } from "react-router-dom";
import login from "../../assets/images/graphic4Login.svg";

export default function LoginForm() {
  // console.log('****', window.location.search.split('').pop());

  const navigate = useNavigate();
  const params = useParams();

  // set initial state for form inputs and error messages
  const storeValue = JSON.parse(localStorage.getItem("user")) || [];

  const [user, setUser] = useState({});

  // const [errors, setErrors] = useState({})
  // const validate = () => {
  //   let error = {}
  //   if (!user.username) {
  //     error.username = '* Please provide UserName'
  //   }
  //   if (!user.password) {
  //     error.password = '* Please provide Password'
  //   }
  //   setErrors(errors)

  //   if (user.username && user.password) {
  //     handleSubmit()
  //   }
  // }

  useEffect(() => {
    if (params?.id) {
      setUser(storeValue[params.id] || {});
    }
  }, []);

  const handleChange = (event) => {
    const userData = {
      ...user,
      [event.target.name]: event.target.value,
    };
    setUser(userData);
  };

  const handleSubmit = () => {
    if (params?.id) {
      let updateData = storeValue.map((el, i) => {
        return i === parseInt(params.id, 10) ? user : el;
      });
      localStorage.setItem("user", JSON.stringify(updateData));
    } else {
      localStorage.setItem("user", JSON.stringify([...storeValue, user]));
    }
    navigate("/table");
  };

  return (
    <div className="main">
      <div className="infoImg">
        <p>Login for work</p>
        <img src={login} alt="" />
      </div>
      <div className="loginForm">
        <h1 className="text-center mt-5">Login</h1>
        <form>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            required
            value={user.username}
            onChange={(event) => handleChange(event)}
          />
          <br />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={user.password}
            onChange={(event) => handleChange(event)}
          />
          <br />
          <button onClick={handleSubmit}>Login</button>
        </form>
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import "./login.scss";
// //images
// import loginImage from "../../assets/images/ActiviteinSec3-2.png";
// //icons
// import { MdMarkEmailUnread } from "react-icons/md";
// import { RiLockPasswordFill } from "react-icons/ri";
// import { MdOutlineCancel } from "react-icons/md";
// import { Link, useNavigate } from "react-router-dom";

// export default function LoginForm() {
//   const [loginData, setLoginData] = useState({ uemail: "", upassword: "" });
//   const [loginError, setLoginError] = useState("");
//   const navigate = useNavigate();
//   const handleOnChange = (event) => {
//     const loginUpData = {
//       ...loginData,
//       [event.target.name]: event.target.value,
//     };
//     setLoginData(loginUpData);
//   };
//   const handleSubmit = (event) => {
//     const storedData = JSON.parse(localStorage.getItem("signup")) || [];
//     // Check if the entered email and password match any stored user data
//     const user = storedData.find(
//       (user) =>
//         user.uemail === loginData.uemail &&
//         user.upassword === loginData.upassword
//     );
//     if (user) {
//       // Successful login, navigate to the dashboard or the desired route
//       navigate("/welcome");
//     } else {
//       // Invalid credentials, display an error
//       setLoginError("Invalid email or password");
//     }
//   };
//   return (
//     <>
//       <div className="form">
//         <div className="formData">
//           <div className="loginBox">
//             <div className="formHeader">
//               <h2 className="">Login</h2>
//             </div>
//             <form>
//               <div className="inputData">
//                 <div className="icon">
//                   <MdMarkEmailUnread />
//                 </div>
//                 <input
//                   type="text"
//                   placeholder="Email"
//                   name="uemail"
//                   value={loginData.email}
//                   onChange={(event) => handleOnChange(event)}
//                 />
//               </div>
//               <div className="inputData">
//                 <div className="icon">
//                   <RiLockPasswordFill />
//                 </div>
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   name="upassword"
//                   value={loginData.upassword}
//                   onChange={(event) => handleOnChange(event)}
//                 />
//               </div>
//               <button
//                 type="button"
//                 onClick={handleSubmit}
//                 className="text-blue-800"
//               >
//                 Log In
//               </button>
//               {loginError && <div className="error bg-blue">{loginError}</div>}
//             </form>
//             <div className="signup">
//               <h3>
//                 Not a member?
//                 <Link to={"/signup"}>
//                   <span>SignUp Now</span>
//                 </Link>
//               </h3>
//             </div>
//           </div>
//           <div className="sideLoginImage">
//             <img src={loginImage} alt="LoginImage" />
//           </div>
//           <Link to={"/"}>
//             <div className="cancel-button">
//               <div className="cancel">
//                 <MdOutlineCancel />
//               </div>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }
