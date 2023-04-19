import "./TodoItem.css";

function TodoItem({ todo, onChange, onDelete }) {
  return (
    <div className="todoListItem">
      <label>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={(evt) => {
            onChange({ ...todo, isCompleted: evt.target.checked });
          }}
        />
        {todo.text}
        <button
          onClick={() => {
            onDelete(todo);
          }}
          className="todoListItemDelete"
        >
          X
        </button>
      </label>
    </div>
  );
}

export default TodoItem;
