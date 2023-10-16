import { useLoaderData } from "react-router-dom";
import Todo from "./Todo";

const Todos = () => {
    const data = useLoaderData();
  return (
<div>
    {data.map((todo) => (
        <Todo key={todo._id} todo={todo} />
    ))}
</div>
  )
};

export default Todos;
