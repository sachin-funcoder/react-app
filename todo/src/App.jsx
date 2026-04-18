import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Input from './components/Input'
import List from './components/List'

function App() {

  const [todos, setTodos] = useState([])

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index)
    setTodos(newTodos)
  }

  return (
    <div>
      <Header />
      <Input addTodo = {handleAddTodo}/>
      <List todos = {todos} deleteTodo = {handleDeleteTodo}/>
    </div>
  )
}

export default App