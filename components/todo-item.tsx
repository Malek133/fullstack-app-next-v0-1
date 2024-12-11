'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import EditTodo from './EditTodo'

interface TodoItemProps {
  id: string
  title: string
  completed: boolean
  onToggle: (id: string, completed: boolean) => void
  onDelete: (id: string) => void
}

export function TodoItem({ id, title, completed, onToggle, onDelete }: TodoItemProps) {
   const [isCompleted, setIsCompleted] = useState(completed)

  const handleToggle = () => {
    setIsCompleted(!isCompleted)
    onToggle(id, !isCompleted)
  }

  return (

    <li className="flex justify-between items-center">
      <span className='space-x-2'> 
        <Checkbox
        checked={isCompleted}
        onCheckedChange={handleToggle}
      />
      <span className={isCompleted ? 'line-through' : ''}>{title}</span>
        </span>
       

      <span className='space-x-5'>
       <Button variant="destructive" size="sm" onClick={() => onDelete(id)}>Delete</Button>
      <EditTodo /> 
      </span>
      
    </li>
    
  )
}

