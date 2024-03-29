import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login'
import MainLayout from './layouts/MainLayout';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          path: "/",
          element: <Home />,
        },
        {
          path: "/register",
          element: <Register/>
        },
        {
          path: '/login',
          element: <Login/>
        }
      ],
    },
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App
