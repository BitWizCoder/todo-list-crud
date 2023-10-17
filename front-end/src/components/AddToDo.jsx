/* eslint-disable react/prop-types */
import { FaPlus } from "react-icons/fa";

const AddToDo = ({ item, setItem }) => {
  const handleAdd = () => {
    fetch(`http://localhost:3000/list`, {
      method: "post",
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
    <div className="form-control">
      <div className="input-group">
        <input
          type="text"
          placeholder="Add Items…"
          className="input input-bordered"
          name="item"
          onChange={(e) => setItem(e.target.value)}
        />
        <button className="btn btn-square" onClick={handleAdd}>
          <FaPlus className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default AddToDo;
