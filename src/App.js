import "./App.css"
import TodoWrapper from "./components/TodoWrapper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
       <header>
         <div className="header-container">
            <FontAwesomeIcon icon={faCircleCheck} size="2xl" className="faCircleCheck" />
            <h1>What</h1>
            <h1 id="head">Todo</h1>
          </div>
       </header>
       <TodoWrapper />
    </div>
  );
}

export default App;
