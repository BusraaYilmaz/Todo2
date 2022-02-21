import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import "./assets/style.css";
import { useStore } from "../store/notes";

const TodoList = (props) => {
  //const { noteState } = useStore();
  // const { note } = noteState;

  // const { id } = props;

  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);

  const firstEvent = (e) => {
    setItem(e.target.value);
  };

  const secondEvent = () => {
    setNewItem((prev) => {
      return [...prev, item];
    });
    localStorage.setItem("");
  };

  const thirdEvent = () => {
    setNewItem([]);
  };

  const fourthEvent = (id) => {
    console.log(id);
    const x = newItem.filter((val) => val != id);
    setNewItem(x);
  };

  return (
    <div>
      <br />
      <br />
      <div className="childOne">
        <input
          type="text"
          value={item}
          placeholder="Enter your note"
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
                <Button className="delBtn" onClick={(e) => fourthEvent(val)}>
                  <DeleteIcon />
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
