/* eslint-disable react/prop-types */

import { useLoaderData } from "react-router-dom";

import { FaTrashArrowUp } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

// eslint-disable-next-line no-unused-vars
const Todo = () => {
  const data = useLoaderData();

  const handleDelete = (id) => {
    console.log(id);

    fetch(`http://localhost:3000/list/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleEdit = (id) => {
    console.log(id);

    fetch(`http://localhost:3000/list/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ item: item }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>To Do&apos;s</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {data.map((todo) => (
            <tr key={todo._id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td className="pr-32">
                <div className="flex items-center space-x-3">
                  <div>
                    <p>{todo.item}</p>
                  </div>
                </div>
              </td>
              <td>
                <button
                  className="btn btn-ghost"
                  onClick={() => {
                    handleEdit(todo._id);
                  }}
                >
                  <FaEdit className="text-xl" />
                </button>
              </td>
              <th>
                <button
                  className="btn btn-ghost"
                  onClick={() => handleDelete(todo._id)}
                >
                  <FaTrashArrowUp className="text-xl" />
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
