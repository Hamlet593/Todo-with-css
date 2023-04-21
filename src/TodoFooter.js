import "./TodoFooter.css";

function TodoFooter({ todos, onClearCompleted }) {
  return (
    <div className="todoAppFooter">
      <span>
        {todos.filter((todo) => todo.isCompleted).length}/{todos.length}{" "}
        Completed
      </span>
      <button onClick={onClearCompleted} className="todoClearCompleted">Clear Completed</button>
    </div>
  );
}

export default TodoFooter;
