import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

// get or set the dispatch and get the method you wanna change with from
// todoSlice [addTodo] method and play with it!

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    dispatch(addTodo(input));

    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900
        text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out
        "
        placeholder="Enter a todo ..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>

      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px6 focus:outline-none"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
