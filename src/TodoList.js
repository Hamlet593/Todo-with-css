import TodoItem from "./TodoItem";

function TodoList({ todos, onChange, onDelete }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            onChange={onChange}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
