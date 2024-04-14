export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const MARK_COMPLETED = 'MARK_COMPLETED';
export const MARK_INCOMPLETE = 'MARK_INCOMPLETE';
export const FILTER_TODOS = 'FILTER_TODOS';
export const MARK_ALL_COMPLETED = 'MARK_ALL_COMPLETED';
export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export const SET_TODOS = 'SET_TODOS';

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const markCompleted = (id) => ({
  type: MARK_COMPLETED,
  payload: { id },
});

export const markIncomplete = (id) => ({
  type: MARK_INCOMPLETE,
  payload: { id },
});

export const filterTodos = (filter) => ({
  type: FILTER_TODOS,
  payload: { filter },
});

export const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED,
});

export const updateSearchTerm = (searchTerm) => ({
  type: UPDATE_SEARCH_TERM,
  payload: { searchTerm },
});

export const setTodos = (todos) => ({
  type: SET_TODOS,
  payload: { todos },
});
