import { Toaster } from "react-hot-toast";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import MainLayout from "./layouts/MainLayout";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const {authUser } = useAuthContext();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          path: "/",
          element: authUser ? <Home/> : <Navigate to={"/login"} />,
        },
        {
          path: "/register",
          element: authUser ? <Navigate to={"/"} /> : <Register />,
        },
        {
          path: "/login",
          element: authUser ? <Navigate to={"/"} /> : <Login />,
        },
      ],
    },
  ]);

  return (
    <>
      <div>
        <Toaster />
      </div>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
