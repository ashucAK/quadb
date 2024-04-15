import React from 'react'; // Import React
import { Provider } from 'react-redux';
import store from './redux/store';
import TodoApp from './components/TodoApp';

const App: React.FC = () => { // Ensure to use React.FC for App component
  return (
    <Provider store={store}>
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <TodoApp />
      </div>
    </Provider>
  );
};

export default App;
