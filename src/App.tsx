import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TodoApp from './components/TodoApp';

const App = () => {
  return (
    <Provider store={store}>
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <TodoApp />
      </div>
    </Provider>
  );
};

export default App;