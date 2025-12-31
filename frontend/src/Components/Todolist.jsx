import { useEffect, useState, useRef } from "react";
import "../css/Todolist.css";

import Listitem from "./ListItem";
import * as Todo from "../Services/Todo";

export default function Todolist({}) {
  
  const [newItemText, setNewItemText] = useState("");
  const [list, setList] = useState(Todo.getList); //What is problem here?

  useEffect(() => {
    const newList = JSON.stringify(list);
    //Updates the data (typically this is our create in CRUD)
    localStorage.setItem("List", newList);
  }, [list]);

  const createItem = (e) => {
    e.preventDefault();
    //Only handle states and effect changes
    setList(Todo.createItem(newItemText)); //Returns a new List
    setNewItemText("");
  };

  const checkItem = (itemKey) => {
    setList(Todo.checkItem(itemKey));
  };

  const removeItem = (itemKey) => {
    setList(Todo.removeItem(itemKey));
  };

  const updateText = (itemKey, text) => {
    setList(Todo.updateText(itemKey, text));
  };

  const reorderList = (itemKey, posIncrement) => {
    setList(Todo.reorderList(itemKey, posIncrement));
  };

  return (
    <>
      <div className="todo-list-div">
        
      <h2 className="todo-list-title">Quests</h2>

      <form className="todo-input" onSubmit={createItem}>
        <input className="todo-create-input"
          placeholder="Enter Item"
          onChange={(e) => {
            setNewItemText(e.target.value);
          }}
          value={newItemText}
        ></input>
        <button className="todo-create-button">+</button>
      </form>
      {/*  ○↑↓● */}

      <div className="todo-list">
        {Object.entries(list) //Converts into arrays
        .sort(([,a],[,b]) => a.position - b.position) //Sorts a b things in the arrays cause it's structured like [[key, *value*]]
        .map(([key, value]) => ( //Maps each one now
          <Listitem
            itemKey={key}
            key={key}
            text={value.text}
            status={value.status}
            updateText={updateText}
            removeItem={removeItem}
            checkItem={checkItem}
            reorder={reorderList}
            position={value.position}
            subText={value.subText}
            renamed={value.renamed}
          />
        ))}
      </div>

      <button className="todo-clear"
        onClick={() => {
          localStorage.removeItem("List");
          localStorage.setItem("List", JSON.stringify({}));
          setList(Todo.getList);
        }}
      >
        Clear List
      </button>

      <button
        onClick={() => {
          //Do Stuff
          console.log(Object.entries(list).length);
        }}
      >
        Show Entries
      </button>

      <button onClick={Todo.test}>Questify</button>
      
      </div>

    </>
  );
}
