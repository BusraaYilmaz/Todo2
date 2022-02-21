import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  childOne: {
    width: "75%",
    height: "65vh",
    backgroundColor: "#f4f4f4",
    borderRadius: "15px",
    margin: "auto",
  },

  input: {
    padding: "25px",
    textAlign: "left",
    height: "30px",
    border: "none",
    background: "transparent",
    fontSize: "20px",
    fontWeight: "500",
    width: "65%",
    borderBottom: "2px solid #efefef",
    outline: "none",
    marginRight: "20px",
  },

  AddBtn: {
    width: "40px",
    height: "45px",
    backgroundColor: "#f06292 !important",
    color: "white !important",
    borderRadius: "50% !important",
  },

  textFont: {
    fontFamily: "verdana",
    fontSize: "20px",
    fontWeight: "500",
  },

  childTwo: {
    width: "35%",
    height: "7vh",
    backgroundColor: "#ec407a",
    borderRadius: "15px",
    margin: "auto",
  },

  delBtn: {
    width: "100%",
    height: "7vh",
    backgroundColor: "#f48fb1",
    borderRadius: "15px",
    margin: "auto",
  },

  delBtn1: {
    width: "100%",
    height: "7vh",
    backgroundColor: "##c2185b",
    borderRadius: "15px",
    margin: "auto",
  },
});

const TodoList = () => {
  const classes = useStyles();
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);

  const firstEvent = (e) => {
    setItem(e.target.value);
  };

  const secondEvent = () => {
    setNewItem((a) => {
      return [...a, item];
    });

    setItem("");
  };

  const thirdEvent = () => {
    setNewItem([]);
  };

  const fourthEvent = (id) => {
    const yeniDizi = newItem.filter((note) => note.id != id);
    setItem(yeniDizi);
  };

  return (
    <div>
      <br />
      <br />
      <div className={classes.childOne}>
        <input
          type="text"
          value={item}
          placeholder="Enter your note"
          onChange={firstEvent}
        />
        <Button className={classes.AddBtn} onClick={secondEvent}>
          <AddIcon />
        </Button>
        <br />
        <br />
        <ul className={classes.input}>
          {newItem.map((value) => {
            return <li> {value} </li>;
          })}
        </ul>
      </div>
      <br />
      <br />
      <div className={classes.childTw}>
        <Button className={classes.delBtn1} onClick={fourthEvent}>
          <DeleteIcon />
          Delete
        </Button>
        <Button className={classes.delBtn} onClick={thirdEvent}>
          <DeleteIcon />
          Delete All
        </Button>
      </div>
    </div>
  );
};

export default TodoList;
