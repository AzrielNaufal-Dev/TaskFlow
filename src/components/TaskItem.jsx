import { useState } from "react";
import Button from "./Button";

export default function TaskItem({ text, id, done, onDeleteTask, onUpdate, onToggleDone }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  function handleSave() {
    if (editText.trim() === "") {
      alert("Fill in the format correctly.");
      return;
    }
    onUpdate(id, editText);
    setIsEditing(false);
  }

  function toggleEdit() {
    setIsEditing(!isEditing);
    setEditText(text);
  }

  return (
    <li
      className={done ? "done" : ""}
      onClick={(e) => {
        if (e.target === e.currentTarget && !isEditing) {
          onToggleDone(id);
        }
      }}
    >
      {isEditing ? (
        <div className="edit-mode">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSave()}
            autoFocus
          />
        </div>
      ) : (
        <span>{text}</span>
      )}

      <div className="task-actions">
        <Button
          value={"💾"}
          className="save-btn"
          onClick={handleSave}
          isDisable={!isEditing}
        />

        <Button value="✏️" className="edit-btn" onClick={() => toggleEdit()} isDisable={done}/>

        <Button
          value="🗑️"
          className="delete-btn"
          onClick={() => onDeleteTask(id)}
        />
      </div>
    </li>
  );
}
