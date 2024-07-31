import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="Header z-[5000]">
        <div className="logoImg">
          <img
            src="https://brandio.io/envato/iofrm/html/images/logo-light.svg"
            alt=""
          />
        </div>
        <div className="heading">
          <h2>LoginForm</h2>
        </div>
        <nav>
          <Link to={"/logSign"} className="text">
            <p>SignUp</p>
          </Link>
          <Link to={"/login"} className="text">
            <p>Login</p>
          </Link>
        </nav>
      </div>
    </>
  );
}
