import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import "./assets/style.css";

const TodoList = (props) => {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);

  const { id, note, deletee } = props;

  const firstEvent = (e) => {
    setItem(e.target.value);
  };

  const secondEvent = () => {
    setNewItem((prev) => {
      return [...prev, item];
    });

    setItem("");
  };

  const thirdEvent = () => {
    setNewItem([]);
  };

  const fourthEvent = (id) => {
    const x = newItem.filter((props) => props.id != id);
    setNewItem(x);
    // localStorage.setNewItem(x);
  };

  return (
    <div>
      <br />
      <br />
      <div className="childOne">
        <input
          type="text"
          value={item}
          placeholder="Add a task"
          onChange={firstEvent}
        />
        <Button className="AddBtn" onClick={secondEvent}>
          <AddIcon />
        </Button>
        <br />
        <br />
        <ul className="textFont">
          {newItem.map((val) => {
            return (
              <li>
                {val}
                <Button className="delBtn" onClick={() => fourthEvent(id)}>
                  <DeleteIcon />
                  Delete
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
      <br />
      <br />
      <div className="childTwo">
        <Button className="delBtn" onClick={thirdEvent}>
          <DeleteIcon />
          Delete All
        </Button>
      </div>
    </div>
  );
};

export default TodoList;
