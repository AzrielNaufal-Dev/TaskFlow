import Button from "./Button";
import { useState } from "react";
import clearForm from "../utils/clearForm.js";

export default function TaskForm({ onAddTask }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const clearName = clearForm(text)
    onAddTask(clearName);
    setText("");
  }

  return (
    <form className="input-field" onSubmit={handleSubmit}>
      <input
        type="text"
        id="task-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button isSubmit={true} value="+" className="add-btn" isDisable={text.trim() === ""} />
    </form>
  );
}
