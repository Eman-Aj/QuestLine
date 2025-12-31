import { useState } from "react";

export default function Listitem({
  itemKey,
  text,
  subText,
  status,
  removeItem,
  updateText,
  checkItem,
  reorder,
  renamed
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [itemText, setItemText] = useState(text);

  return (
    <div className="todo-item" key={itemKey}>
      {/* Status */}
      <button
        className="todo-item-status"
        onClick={() => checkItem(itemKey)}
      >
        {status ? "●" : "○"}
      </button>

      {/* Content */}
      <div className="todo-item-content">
        {isEditing ? (
          <input
            className="todo-item-input"
            autoFocus
            value={itemText}
            onChange={(e) => setItemText(e.target.value)}
            onBlur={() => {
              updateText(itemKey, itemText);
              setIsEditing(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") e.target.blur();
            }}
          />
        ) : (
          <h3
            className="todo-item-title"
            onClick={() => setIsEditing(true)}
          >
            {text}
          </h3>
        )}
        <p>Fancy Text</p>
      </div>

      {/* Actions */}
      <div className="todo-item-actions">
        <button
          className="todo-item-remove"
          onClick={() => removeItem(itemKey)}
        >
          ✘
        </button>

        <button
          className="todo-item-move"
          onClick={() => reorder(itemKey, -1)}
        >
          ↑
        </button>

        <button
          className="todo-item-move"
          onClick={() => reorder(itemKey, 1)}
        >
          ↓
        </button>
      </div>
    </div>
  );
}
