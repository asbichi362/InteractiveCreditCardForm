import Layout from "./Components/Layout";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import React, { useState, useEffect } from 'react';
function App() { 
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  const [filter, setFilter] = useState('all');
  const [darkMode, setDarkMode] = React.useState(true)
  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
}

   // Load Todos from localStorage
   useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // Save Todos to localStorage whenever the todos state changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  const addTodo = () => {
    if (todo.trim() === '') return;
    setTodos([...todos, { text: todo, completed: false, id: Date.now() }]);
    setTodo('');
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const clearCompleted = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
  };

  const filterTodos = () => {
    if (filter === 'all') return todos;
    if (filter === 'active') return todos.filter((todo) => !todo.completed);
    if (filter === 'completed') return todos.filter((todo) => todo.completed);
    return todos;
  };

  
  return (
    <div className="block rounded-lg bg-white text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
   
    <div className="p-6  h-1/3 bg-gradient-to-r from-cyan-500 via-sky-500 to-pink-500">
      <h5
        className="mb-2  text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Todo App
      </h5>
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-1 border p-2 rounded-l"
          placeholder="Add a new todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white p-2 rounded-r hover:bg-blue-600"
        >
          Add
        </button>
      </div>
      
    </div>
    
    
    <div className="">
      
      <div className="mt-8 ml-6">
        {filterTodos().map((todo) => (
          <div key={todo.id} className="flex items-center border-b border-gray-300 py-2">
            <div
              onClick={() => toggleComplete(todo.id)}
              className={`cursor-pointer mr-2 ${todo.completed ? 'text-green-500 line-through' : 'text-gray-800'}`}
            >
              {todo.text}
            </div>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="mb-4">
        {filter === 'all' && (
          <button className="mr-2 text-blue-500" disabled>
            All
          </button>
        )}
        {filter !== 'all' && (
          <button
            onClick={() => setFilter('all')}
            className="mr-2 hover:text-blue-500"
          >
            All
          </button>
        )}
        {filter === 'active' && (
          <button className="mr-2 text-blue-500" disabled>
            Active
          </button>
        )}
        {filter !== 'active' && (
          <button
            onClick={() => setFilter('active')}
            className="mr-2 hover:text-blue-500"
          >
            Active
          </button>
        )}
        {filter === 'completed' && (
          <button className="text-blue-500" disabled>
            Completed
          </button>
        )}
        {filter !== 'completed' && (
          <button
            onClick={() => setFilter('completed')}
            className="hover:text-blue-500"
          >
            Completed
          </button>
        )}
      </div>

      
    </div>
    <div
      className="grid justify-items-end border-t-2 border-neutral-100 px-8 py-3 dark:border-neutral-600 dark:text-neutral-50">
      <button
          onClick={clearCompleted}
          className="text-red-500 hover:text-red-700"
        >
          Clear Completed
        </button>
    </div>
 
  </div>
  
  );
}

export default App;
