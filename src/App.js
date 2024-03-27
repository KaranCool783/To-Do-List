import React, { useState } from "react";
import "./Components/Todo.css";

const Dumy = () => {
  const myList = [];

  const [currElem, setcurrElem] = useState("");

  const [list, setlist] = useState(myList);

  const addItem = () => {
    if (currElem.trim() !== "") {
      setlist((prevList) => [...prevList, currElem]);
    }
    setcurrElem("");
  };

  const elementAdd = (e) => {
    setcurrElem(e.target.value);
  };

  const removeItem = (index) => {
    const newList = [...list];
    // Remove the item at the specified index
    newList.splice(index, 1);
    // Update the list state with the updated list
    setlist(newList);
  };

  return (
    <div className="outSide">
      <div className="container">
        <h1 className="headLine">To-Do List</h1>

        <input
          type="text"
          onChange={elementAdd}
          value={currElem}
          placeholder="Add your Task!"
        />
        <button className="addButton" onClick={addItem}>
          +
        </button>

        <ul className="listContainer">
          {list.map((item, index) => (
            <li className="listItem" key={index}>
              <button
                className="removeButton"
                onClick={() => removeItem(index)}
              >
                -
              </button>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Dumy;
