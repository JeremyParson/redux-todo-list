import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, clearTodo } from "../features/todoSlice";

export default function TodoList(props) {
  const todoItems = useSelector((state) => state.todo.todoItems);
  console.log(todoItems)
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem(todo))
  };
  return (
    <div>
      <ol>
        {todoItems.map((item, i) => (
          <li key={i} onClick={(e) => dispatch(removeItem(i))}>{item}</li>
        ))}
      </ol>
      <form onSubmit={handleSubmit}>
        <input value= {todo} type="text" onChange={(e) => setTodo(e.target.value)}/>
        <input type="submit" />
      </form>
      <button onClick={(e) => dispatch(clearTodo())}>Clear</button>
    </div>
  );
}
