import React from "react";
import "./sidebar.scss";
import { FaSignInAlt } from "react-icons/fa";
import { TbHandClick } from "react-icons/tb";
import { MdCalculate } from "react-icons/md";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar flex flex-col w-[164px] bg-gray-400 items-center justify-center">
      <div className="flex justify-center items-center gap-3 h-6">
        <a
          href="/quotes"
          className="flex justify-between items-center w-[150px] gap-3"
        >
          <TbHandClick className="inline-block text-xl text-black" />
          <span className="text-xl text-blue-800 w-[100px]">Quotes</span>
        </a>
      </div>
      <div className="flex justify-center items-c gap-1 h-6">
        <a
          href="/logSign"
          className="flex w-[150px] justify-between items-center gap-3"
        >
          <FaSignInAlt className="inline-block text-xl text-red-800" />
          <span className="text-xl text-blue-800 w-[100px]">login</span>
        </a>
      </div>
      <div className="flex justify-center items-center h-6 gap-3">
        <Link
          to={"/calci"}
          className="flex items-center justify-between w-[150px] gap-3"
        >
          <MdCalculate className="inline-block text-xl text-purple-900" />
          <span className="text-xl text-blue-800 w-[100px]">Calculator</span>
        </Link>
      </div>
    </div>
  );
}
