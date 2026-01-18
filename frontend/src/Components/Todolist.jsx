import { useEffect, useState, useRef } from "react";
import "../css/Todolist.css";

import Listitem from "./ListItem";
import * as Todo from "../Services/Todo";

export default function Todolist({}) {
  const [newItemText, setNewItemText] = useState("");
  const [list, setList] = useState(Todo.getList);
  const [allowQuestify, setAllowQuestify] = useState(
    localStorage.getItem("allowQuestify") !== null
      ? localStorage.getItem("allowQuestify")
      : true
  );
  const [questifyStatus, setQuestifyStatus] = useState("Qhas");
  
  const timeoutRef = useRef(null);
  const questifyTime = 5;

  //Ensures as we type we aren't going to be interupted
  useEffect(() => {
    scheduleQuestify();
  }, [newItemText]);

  useEffect(() => {
    scheduleQuestify();
    const newList = JSON.stringify(list);
    //Can read local storage to format data base sends
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

  //Delay timer for ai to change title names
  const scheduleQuestify = () => {
    if (localStorage.getItem("allowQuestify") === "false") return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current); //Can't use states, causes rerenders

    setQuestifyStatus("Generating Quests...")
    timeoutRef.current = setTimeout(() => {
      questify(); //Sends auto ai change - set up "disable" later
    }, 1000 * questifyTime);

    return () => clearTimeout(timeoutRef.current);
  };

  const questify = () => {
    Todo.questify().then((data) => {
      //This .then promise is because questify is ASYNC
      if (data === -1) {
        console.log("Already Renamed");
      } else if (data === null) {
        console.log("Gave Nothing...");
      } else {
        console.log(data);

        setList(data);
      }
      
      setQuestifyStatus("")
    });
  };

  return (
    <>
      <div className="todo-list-div">
        <h2 className="todo-list-title">{allowQuestify ? "Quests" : "Todo's"}</h2>

        <form className="todo-input create-hover" onSubmit={createItem}>
          <input
            className="todo-create-input"
            placeholder="Enter Item"
            onChange={(e) => {
              setNewItemText(e.target.value);
            }}
            value={newItemText}
          ></input>

          <button
            className="todo-create-button create-hover"
            onClick={createItem}
          >
            +
          </button>

          <button
            className="todo-questify create-hover"
            onClick={() => {
              localStorage.setItem("allowQuestify", !allowQuestify);
              setAllowQuestify(!allowQuestify);
            }}
          >
            AI Quests: {allowQuestify ? "ON" : "OFF"}
          </button>
        </form>
        {/*  ○↑↓● */}
        <p>{questifyStatus}</p>
        <div className="todo-list">
          {Object.entries(list) //Converts into arrays
            .sort(([, a], [, b]) => a.position - b.position) //Sorts a b things in the arrays cause it's structured like [[key, *value*]]
            .map(
              (
                [key, value] //Maps each one now
              ) => (
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
              )
            )}
        </div>

        <button
          className="todo-clear"
          onClick={() => {
            localStorage.removeItem("List");
            localStorage.setItem("List", JSON.stringify({}));
            setList(Todo.getList);
          }}
        >
          Clear List
        </button>
{/* 
        <button
          onClick={() => {
            //Do Stuff
            console.log(Object.entries(list).length);
          }}
        >
          Show Entries
        </button> */}
      </div>
    </>
  );
}
