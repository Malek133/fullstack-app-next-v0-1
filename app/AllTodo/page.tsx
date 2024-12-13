import React from 'react'
import { getAllTodos } from '../actions/actions'

const page = async () => {
    const todos = await getAllTodos()
  return (
    <div className='grid my-7 place-items-center'>
      {todos && todos.map((todo)=>(
        <ul key={todo.id}>
            <li >
                 {todo.title}
            </li>
        </ul>
      ))}
    </div>
  )
}

export default page