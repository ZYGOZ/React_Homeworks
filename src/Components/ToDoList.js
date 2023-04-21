import React, { useMemo, useState } from "react";

export default function ToDo() {
  const [input, setInput] = useState("");
  const [completedTaskCount, setCompletedTaskCount] = useState(0);

  const [todoList, setTodoList] = useState([]);

  const handleClick = useMemo(() => {
    const id = todoList.length + 1;
    setTodoList((prev) => [
      ...prev,
      {
        id: id,
        task: input,
        complete: false,
      },
    ]);
    setInput("")},[input,todoList,setTodoList]);
  

  const handleComplete = useMemo((id) => {
    let list = todoList.map((task) => {
      let item = {};
      if (task.id === id) {
        if (!task.complete) {
          setCompletedTaskCount(completedTaskCount + 1);
        } else {
          setCompletedTaskCount(completedTaskCount - 1);
        }
        item = { ...task, complete: !task.complete };
      } else {
        item = { ...task };
      }
      return item;
    });
    setTodoList(list)},[completedTaskCount, todoList]);

  return (
    <div className="ToDo-Container">
      <div>
        <h2>Todo List</h2>
        <input
          className="ToDo-input"
          value={input}
          onInput={(e) => setInput(e.target.value)}
        />
        <button className="ToDo-Button" onClick={() => handleClick()}>
          Add
        </button>
        <div>
          <span className="ToDo-Span">
            <b>Pending Tasks</b> {todoList.length - completedTaskCount}
          </span>
          <span className="ToDo-Span">
            <b>Completed Tasks</b> {completedTaskCount}
          </span>
        </div>
        <div>
          <ul>
            {todoList.map((todo) => {
              return (
                <li
                  complete={todo.complete}
                  id={todo.id}
                  onClick={() => handleComplete(todo.id)}
                  style={{
                    listStyle: "none",
                    textDecoration: todo.complete && "line-through",
                    display: todo.complete && "none",
                  }}
                >
                  {todo.task}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}