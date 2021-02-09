import React from 'react';
import './App.css';
import Input from './components/Input.js';

const todoList = [{
  item: input,
  done: false,
  id: Date.now()
}]

function App() {
  return (
    <div className="app">
      <div className="app_container">
        <div className="app_todoContainer">

        </div>
        <Input/>
      </div>
    </div>
  );
}

export default App;
