import Todo from "./Todo";
import AddToDo from "./AddToDo";
import { useState } from "react";

const Todos = () => {
  // const data = useLoaderData();
  const [item, setItem] = useState("");
  return (
    <div className="flex flex-col justify-center items-center gap-5 mt-5 mb-10">
      <AddToDo item={item} setItem={setItem} />
      <div>
        {/* {data.map((todo) => (
          <Todo key={todo._id} todo={todo} />
        ))} */}
        <Todo />
      </div>
    </div>
  );
};

export default Todos;
