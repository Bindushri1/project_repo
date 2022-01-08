import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='todo-app'>
      <TodoList />
      <div className='submit-con'>
      <button className = "button">Submit</button>
      </div>
    </div>
  );
}

export default App;
