import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {AddTodo} from "./components/AddTodo";
import {Todos} from "./components/Todos";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
            TODOS
        </p>
          <Todos/>
          <AddTodo/>

      </header>
    </div>
  );
}

export default App;
