
"use client"

import { useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import EditTodo from './EditTodo'
import { editTodo } from '@/app/actions/actions'
import { DeleteTodo } from './DeleteTodo'

interface TodoItemProps {
  id: string
  title: string
  completed: boolean
  onToggle: (id: string, completed: boolean) => void
  onDelete: (id: string) => void
}

export function TodoItem({ id, title, completed, onToggle,onDelete }: TodoItemProps) {
  const [isCompleted, setIsCompleted] = useState(completed)

  const handleToggle = () => {
    setIsCompleted(!isCompleted)
    onToggle(id, !isCompleted)
  }

  return (
    <li className="flex justify-between items-center gap-2">
      <div className='flex items-center space-x-2'>
         <Checkbox
        checked={isCompleted}
        onCheckedChange={handleToggle}
      />
      <span className={isCompleted ? 'line-through' : ''}>{title}</span>
        </div>
        

      <div className="flex items-center gap-2">
        <EditTodo id={id} initialTitle={title} editTodo={editTodo} />
        <DeleteTodo onDelete={onDelete} id={id} title={title} />
        {/* <Button variant="destructive" size="sm" onClick={() => onDelete(id)}>Delete</Button> */}
      </div>
      
    </li>
  )
}

