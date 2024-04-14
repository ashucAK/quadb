import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, removeTodo, markCompleted, markIncomplete, filterTodos, markAllCompleted, updateSearchTerm, setTodos } from '../redux/actions';
import { FaCheckCircle, FaTimesCircle, FaTrashAlt } from 'react-icons/fa';
import { BiSearch, BiPlusCircle } from 'react-icons/bi';

const TodoApp = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const searchTerm = useSelector((state) => state.searchTerm);
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState('');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      dispatch(setTodos(storedTodos));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (newTodoText.trim() !== '') {
      dispatch(addTodo(newTodoText.trim()));
      setNewTodoText('');
    }
  };

  const handleToggleTodo = (index) => {
    dispatch(toggleTodo(index));
  };

  const handleRemoveTodo = (index) => {
    dispatch(removeTodo(index));
  };

  const handleMarkCompleted = (index) => {
    dispatch(markCompleted(index));
  };

  const handleMarkIncomplete = (index) => {
    dispatch(markIncomplete(index));
  };

  const handleFilterTodos = (filter) => {
    dispatch(filterTodos(filter));
  };

  const handleMarkAllCompleted = () => {
    dispatch(markAllCompleted());
  };

  const handleSearchTermChange = (value) => {
    dispatch(updateSearchTerm(value));
  };

  const filteredTodos = todos.filter((todo) => {
    const matchesFilter =
      (filter === 'COMPLETED' && todo.completed) ||
      (filter === 'INCOMPLETE' && !todo.completed) ||
      filter === 'ALL';
    const matchesSearch = todo.text.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-6">Todo List</h1>
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Add a new todo"
          className="flex-1 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 px-2 py-1 mr-2"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2"
          onClick={handleAddTodo}
        >
          <BiPlusCircle size={24} />
        </button>
      </div>
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search todos"
          className="flex-1 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 px-2 py-1 mr-2"
          value={searchTerm}
          onChange={(e) => handleSearchTermChange(e.target.value)}
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2">
          <BiSearch size={24} />
        </button>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <button
            className={`px-2 py-1 rounded-md ${filter === 'ALL' ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
            onClick={() => handleFilterTodos('ALL')}
          >
            All
          </button>
          <button
            className={`px-2 py-1 rounded-md ${filter === 'COMPLETED' ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
            onClick={() => handleFilterTodos('COMPLETED')}
          >
            Completed
          </button>
          <button
            className={`px-2 py-1 rounded-md ${filter === 'INCOMPLETE' ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
            onClick={() => handleFilterTodos('INCOMPLETE')}
          >
            Incomplete
          </button>
        </div>
        <button
          className="bg-green-500 hover:bg-green-600 text-white rounded-md px-3 py-1"
          onClick={handleMarkAllCompleted}
        >
          Mark All Completed
        </button>
      </div>
      <ul className="space-y-2">
        {filteredTodos.map((todo, index) => (
          <li
            key={index}
            className="bg-gray-100 rounded-md p-3 flex justify-between items-center"
          >
            <div className="flex items-center">
              <span className={`mr-2 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                {todo.text}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                className={`p-2 rounded-full ${
                  todo.completed
                    ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                    : 'bg-green-500 hover:bg-green-600 text-white'
                }`}
                onClick={() => (todo.completed ? handleMarkIncomplete(index) : handleMarkCompleted(index))}
              >
                {todo.completed ? <FaTimesCircle size={18} /> : <FaCheckCircle size={18} />}
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white rounded-full p-2"
                onClick={() => handleRemoveTodo(index)}
              >
                <FaTrashAlt size={18} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
