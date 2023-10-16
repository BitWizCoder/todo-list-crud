import { Outlet } from "react-router-dom";

const Home = () => {
  return (
<div>
    <h1 className="text-center text-3xl mt-14 font-extrabold text-gray-700">Full-Stack To Do App</h1>
    <Outlet/>
</div>
  )
};

export default Home;
