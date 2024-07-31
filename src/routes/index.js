import { createBrowserRouter } from "react-router-dom";
import LoginForm from "../app/loginForm";
import DefaultLayout from "./DefaultLayOut";
import SignUpForm from "../app/signupForm";
import Table from "../app/tableData";
import LoginSignup from "../shared/components/home/login_signup/LoginSignup";
import Calculator from "../shared/components/calculator";
import Sidebar from "../shared/components/home/sidebar";
import FormComponent from "../shared/components/fetch";
// import Api from "../shared/components/fetch/formvalidate";
import TodoList from "../shared/components/home/todoData";
import QuotesComponent from "../shared/components/fetch";
import Herobanner from "../shared/components/home/herobanner";
// import MyComponent from "../shared/components/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Sidebar />,
      },
      {
        path: "/",
        element: <Herobanner />,
      },
      {
        path: "/signup",
        element: <SignUpForm />,
      },
      {
        path: "/quotes",
        // element: <Api />,
        element: <QuotesComponent />,
      },
      {
        path: "/formvalid",
        element: <FormComponent />,
      },
      {
        path: "/login",
        element: <LoginForm />,
      },
      {
        path: "/login/:id",
        element: <LoginForm />,
      },
      {
        path: "/table",
        element: <Table />,
      },
      {
        path: "/logSign",
        element: <LoginSignup />,
      },
      {
        path: "/calci",
        element: <Calculator />,
      },
      {
        path: "/todo",
        element: <TodoList />,
      },
    ],
  },
]);
export default router;
