import { useEffect, useRef, useState } from "react";

export default function Listitem({
  itemKey,
  text,
  status,
  removeItem,
  updateText,
  checkItem,
  reorder,
  position,
}) {
  const [isEditing, setIsEditing] = useState(""); //Item Key
  const [itemText, setItemText] = useState(text);

  const inputRef = useRef(null);
  const focustInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    focustInput();
  }, [isEditing]);

  return (
    <>
      {/* <>{position}</> */}

      <div></div>

      <div className="todo-item" key={itemKey}>
        {/* This is Check Button */}
        <button
          className="check-button item"
          onClick={() => {
            checkItem(itemKey);
          }}
        >
          {/* Conditional Formatting for button */}
          {status ? "●" : "○"}
        </button>

        <div className="todo-item-text item">
        {isEditing === itemKey ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              updateText(itemKey, itemText);
              setIsEditing("");
            }}
          >
            <input
              defaultValue={text}
              ref={inputRef}
              onChange={(e) => {
                setItemText(e.target.value);
              }}
            ></input>
          </form>
        ) : (
          <h3
            onClick={() => {
              setIsEditing(itemKey);
            }}
          >
            {text}
          </h3>
        )}
        </div>

        <div className="todo-item-actions item">
          <button
            className="todo-item-remove"
            onClick={() => {
              removeItem(itemKey);
            }}
          >
            ✘
          </button>
          <button
            className="todo-item-move"
            onClick={() => {
              reorder(itemKey, -1);
            }}
          >
            ↑
          </button>
          <button
            className="todo-item-move"
            onClick={() => {
              reorder(itemKey, 1);
            }}
          >
            ↓
          </button>
        </div>
      </div>
    </>
  );
}
