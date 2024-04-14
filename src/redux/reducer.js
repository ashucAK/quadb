import {
    ADD_TODO,
    TOGGLE_TODO,
    REMOVE_TODO,
    MARK_COMPLETED,
    MARK_INCOMPLETE,
    FILTER_TODOS,
    MARK_ALL_COMPLETED,
    UPDATE_SEARCH_TERM,
    SET_TODOS,
  } from './actions';
  
  const initialState = {
    todos: [],
    filter: 'ALL',
    searchTerm: '',
  };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return {
          ...state,
          todos: [...state.todos, { text: action.payload.text, completed: false }],
        };
      case TOGGLE_TODO:
        return {
          ...state,
          todos: state.todos.map((todo, index) =>
            index === action.payload.id ? { ...todo, completed: !todo.completed } : todo
          ),
        };
      case REMOVE_TODO:
        return {
          ...state,
          todos: state.todos.filter((_, index) => index !== action.payload.id),
        };
      case MARK_COMPLETED:
        return {
          ...state,
          todos: state.todos.map((todo, index) =>
            index === action.payload.id ? { ...todo, completed: true } : todo
          ),
        };
      case MARK_INCOMPLETE:
        return {
          ...state,
          todos: state.todos.map((todo, index) =>
            index === action.payload.id ? { ...todo, completed: false } : todo
          ),
        };
      case FILTER_TODOS:
        return {
          ...state,
          filter: action.payload.filter,
        };
      case MARK_ALL_COMPLETED:
        return {
          ...state,
          todos: state.todos.map((todo) => ({ ...todo, completed: true })),
        };
      case UPDATE_SEARCH_TERM:
        return {
          ...state,
          searchTerm: action.payload.searchTerm,
        };
      case SET_TODOS:
        return {
          ...state,
          todos: action.payload.todos,
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;
  