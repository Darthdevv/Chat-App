import { Outlet } from "react-router-dom"

function MainLayout() {
  return (
    <div className=" p-4 h-screen flex items-center justify-center">
      <Outlet/>
    </div>
  );
}

export default MainLayout