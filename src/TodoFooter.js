import "./TodoFooter.css";

function TodoFooter({ todos, onClearCompeted }) {
  return (
    <div className="todoAppFooter">
      <span>
        {todos.filter((todo) => todo.isCompleted).length}/{todos.length}{" "}
        Completed
      </span>
      <button onClick={onClearCompeted} className="todoClearCompleted">Clear Completed</button>
    </div>
  );
}

export default TodoFooter;
