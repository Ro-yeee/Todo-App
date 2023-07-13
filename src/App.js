import "./App.css"
import TodoWrapper from "./components/TodoWrapper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import NotesWrapper from "./components/NotesWrapper";
import { useState } from "react";
import { faGithubAlt} from "@fortawesome/free-brands-svg-icons";

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
              <button className={path === "todos" ? "active" : null} onClick={() => setPath("todos")}>Inbox</button>
              <button className={path === "notes" ? "active" : null} onClick={() => setPath("notes")}>Notes</button>
            </div>
          </div>
       </header>
       {component}
       <footer>
        <p>Roy Joseph © {new Date().getFullYear()} <a href="https://github.com/Ro-yeee" className="github" ><FontAwesomeIcon icon={faGithubAlt} flip/></a></p>
       </footer>
    </div>
  );
}

export default App;
