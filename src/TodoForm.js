import { useState } from "react";
import "./TodoForm.css";

function TodoForm({ onAdd }) {
  const [text, setText] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAdd(text);
        setText("");
      }}
      className="todoAppForm"
    >
      <input
        type="text"
        value={text}
        onChange={(evt) => setText(evt.target.value)}
      />
      <button className="todoAppAddButton">Add</button>
    </form>
  );
}

export default TodoForm;
