import React from "react";
import Header from "../shared/common/header";
import Footer from "../shared/common/footer";
import Sidebar from "../shared/components/home/sidebar";
import { Outlet } from "react-router-dom";

export default function DefaultLayout({ children }) {
  return (
    <>
      <div className="fixed top-0 left-0 flex">
        <Header />
        <Sidebar />
      </div>
      <Outlet />
      <Footer />
    </>
  );
}
