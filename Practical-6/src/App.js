import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='todo-app'>
      <TodoList />
      <br />
      <br />
      <center><h3 style={{color: "white"}}>Prepared by - 20CS102 Janesh Vyas</h3></center>
    </div>
  );
}

export default App;