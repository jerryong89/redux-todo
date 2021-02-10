import React from 'react';
import './App.css';
import Input from './components/Input.js';
import TodoItem from './components/TodoItem.js'

const todoList = [{
  item: "todo",
  done: false,
  id: 1234
}, {
  item: "todo2",
  done: true,
  id: 12345
}
]

function App() {
  return (
    <div className="app">
      <div className="app_container">
        <div className="app_todoContainer">
          {
            todoList.map(item=>(
              <TodoItem
                name={item.item}
                done={item.done}
                id={item.id}
              />
            ))
          }
        </div>
        <Input/>
      </div>
    </div>
  );
}

export default App;
