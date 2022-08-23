import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {TodoInput} from "./components/TodoInput";
import {Todos} from "./components/Todos";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
            TODOS
        </p>
          <Todos/>
          <TodoInput/>
      </header>
    </div>
  );
}

export default App;
