import React ,{useState} from 'react'
import TodoForm from './TodoForm'
import { v4 as uuid } from 'uuid'
import TodoCard from './TodoCard'
import EditTodoForm from './EditTodoForm'
import TodoNavElement from './TodoNavElement'
import ShowCard from './ShowCard'
uuid()

function TodoWrapper() {
  const [todos,setTodos] = useState([])
  const [selection,setSelection] = useState("All Tasks")
  const addTodo = (todo,priority) =>{
    setTodos([...todos, {id: uuid(),task: todo,completed: false,isEditing:false,priority}])
  }
  const toggleComplete = (id) =>{
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }
  const deleteTask = (id) =>{
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const toggleEditing = (id) =>{
    setTodos(todos.map(todo => todo.id === id ? {...todo,isEditing: !todo.isEditing} : todo))
  }
  const editTodo = (todo,priority,id) =>{
    setTodos(todos.map(element => element.id === id ? {...element, task:todo, isEditing: !element.isEditing,priority} : element))
  }
  return (
    <div className='TodoWrapper'>
      <TodoForm addTodo={addTodo} />
      <TodoNavElement selection={selection} setSetection={setSelection}/>
      {
          todos.length < 1 ? <img src="Empty-amico.png" alt="Looks Empty" className='emptyIllustration'/> : selection === "All Tasks" ?
          todos.map((element,index) => {
            if(element.isEditing)
            return (<EditTodoForm editTodo={editTodo} element={element} key={index} />) 
            else 
            return (<TodoCard element={element} 
                              key={index} 
                              toggleComplete={toggleComplete} 
                              deleteTask={deleteTask} 
                              toggleEditing={toggleEditing} />)
            }) : 
            todos.filter(todo => todo.completed === true).map((element,index) => (
                <ShowCard element={element} key={index} />
             ))
      }
    </div>
  )
}

export default TodoWrapper
