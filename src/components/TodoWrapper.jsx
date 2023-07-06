import React ,{useState} from 'react'
import TodoForm from './TodoForm'
import { v4 as uuid } from 'uuid'
import Todo from './Todo'
uuid()

function TodoWrapper() {
  const [todos,setTodos] = useState([])
  const addTodo = (todo) =>{
    setTodos([...todos, {id: uuid(),task: todo,status: false}])
  }
 
  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo}/>
      <Todo todos={todos}/>
    </div>
  )
}

export default TodoWrapper
