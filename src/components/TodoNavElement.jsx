import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function TodoNavElement({selection,setSelection}) {
    const [click,setClick] = useState(false)
    const selected = (item) =>{
        setSelection(item)
        setClick(!click)
    }
  return (
    <div className='navContainer'>
      <h2 className='sectionheading'>{selection}</h2>
      <div className='HamburgerMenu'>
        <FontAwesomeIcon onClick={() => setClick(!click)} icon={faBars} size='xl' className='faBars'/>
        <ul className={click === true ? "dropActive dropdown" : "dropdown"}>
            <li className='list' onClick={() => selected("All Tasks")}>All</li>
            <li className='list' onClick={() => selected("Completed")}>Completed</li>
            <li className='low' onClick={() => selected("Low Priority")}>Low Priority</li>
            <li className='medium' onClick={() => selected("Medium Priority")}>Medium Priority</li>
            <li className='high' onClick={() => selected("High Priority")}>High Priority</li>
        </ul>
      </div>
    </div>
  )
}

export default TodoNavElement
