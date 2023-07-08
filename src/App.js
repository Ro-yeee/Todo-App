import "./App.css"
import TodoWrapper from "./components/TodoWrapper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import NotesWrapper from "./components/NotesWrapper";
import { useState } from "react";

function App() {
  const [path,setPath] = useState("todos")
  let component
  if(path === "todos") component = <TodoWrapper/>
  else if(path === "notes") component = <NotesWrapper/>
  return (
    <div className="App">
       <header>
         <div className="header-container">
            <div className="logo">
              <FontAwesomeIcon icon={faCircleCheck} size="2xl" className="faCircleCheck" />
              <h1>What</h1>
              <h1 id="head">Todo</h1>
            </div>
            <div className="routes">
              <button onClick={() => setPath("todos")}>Inbox</button>
              <button onClick={() => setPath("notes")}>Notes</button>
            </div>
          </div>
       </header>
       {component}
    </div>
  );
}

export default App;
