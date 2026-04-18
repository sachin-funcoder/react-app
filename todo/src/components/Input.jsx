import React, { useState } from 'react'

function Input({ addTodo }) {
    const [todo, setTodo] = useState("")

    const handleChange = () => {
        if(todo.trim() !== ""){
           addTodo(todo)
           setTodo("")
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleChange();
        }
    }

  return (
    <div className="input-group">
      <input 
        type="text" 
        className="todo-input"
        placeholder='What needs to be done?' 
        value={todo} 
        onKeyDown={handleKeyDown}
        onChange={e => setTodo(e.target.value)}
      />
      <button className="add-btn" onClick={handleChange} aria-label="Add Todo">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
    </div>
  )
}

export default Input