import React from 'react'
import Item from './Item'

function List({todos, deleteTodo}) {
  return (
    <div>
        {todos.map((todo, index) => (
            <Item key={index} todo={todo} index={index} deleteTodo={deleteTodo}/>
        ))}
    </div>
  )
}

export default List