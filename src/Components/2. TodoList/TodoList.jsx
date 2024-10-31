import { useEffect, useState } from "react";
import "./TodoStyle.css";

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  function generateId() {
    return Math.random();
  }

  // saved to Local Storage
  useEffect(() => {
    const savedTodo = localStorage.getItem("todoList");
    if (savedTodo) {
      setTodo(JSON.parse(savedTodo));
    }
  }, []);

  // load todoList to Local Storage
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todo));
  }, [todo]);

  const handledSubmit = () => {
    setTodo([...todo, { text: input, id: generateId() }]);
    setInput("");
  };

  const remove = (id) => {
    setTodo(todo.filter((t) => t.id !== id));
  };
  return (
    <div className="container">
      <h1>My Todo List</h1>
      <input
        type="text"
        placeholder="New Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handledSubmit}>Submit</button>

      <ul className="todo-list">
        {todo.map(({ text, id }) => (
          <li key={id} className="todo">
            <span>{text}</span>
            <button className="close" onClick={() => remove(id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
