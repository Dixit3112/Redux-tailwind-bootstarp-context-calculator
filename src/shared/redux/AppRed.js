import logo from "./logo.svg";
import "./App.css";
import Form from "./components/form";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/home";
import Table from "./components/table";
import User from "./components/user";
import ButtonContext from "./myContext";
import { useEffect, useState } from "react";
import UseRef from "./hooks/useRef";
import UseMemoHook from "./hooks/useMemo";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./redux/store";

function App(props) {
  const [label, setLabel] = useState("Submit Button");
  const [cartItem, setCartItem] = useState(0);
  const data = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 2,
      id: 40,
      title: "totam atque quo nesciunt",
      completed: true,
    },
    {
      userId: 3,
      id: 41,
      title:
        "aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit",
      completed: false,
    },
    {
      userId: 4,
      id: 80,
      title:
        "tempore molestias dolores rerum sequi voluptates ipsum consequatur",
      completed: true,
    },
    {
      userId: 5,
      id: 81,
      title: "suscipit qui totam",
      completed: true,
    },
    {
      userId: 6,
      id: 101,
      title: "explicabo enim cumque porro aperiam occaecati minima",
      completed: false,
    },
    {
      userId: 7,
      id: 140,
      title: "aut consectetur in blanditiis deserunt quia sed laboriosam",
      completed: true,
    },
    {
      userId: 8,
      id: 141,
      title:
        "explicabo consectetur debitis voluptates quas quae culpa rerum non",
      completed: true,
    },
    {
      userId: 9,
      id: 177,
      title: "et placeat temporibus voluptas est tempora quos quibusdam",
      completed: false,
    }
  ];
  return (
    <Provider store={store}>
      <ButtonContext.Provider
        value={{ label, setLabel, data, cartItem, setCartItem }}
      >
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home label={label} />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoutes>
                    <>Dashboard</>
                  </ProtectedRoutes>
                }
              />
              <Route path="/login" element={<>login</>} />
              <Route path="/form" element={<Form />} />
              <Route path="/form/:id" element={<Form />} />
              <Route path="/table" element={<Table />} />
              <Route path="/user" element={<User />} />
              <Route path="/use-ref" element={<UseRef />} />
              <Route path="/use-memo" element={<UseMemoHook />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ButtonContext.Provider>
    </Provider>
  );
}

export default App;

export const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("isLoggedUser")) {
      navigate("/login");
    }
  }, []);

  return children;
};
