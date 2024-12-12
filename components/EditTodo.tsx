// import React from 'react'
// import { Button } from "@/components/ui/button"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

// const EditTodo = ({editTodo}) => {
//   return (
//     <Dialog>
//       <form action={editTodo}>

//     <DialogTrigger asChild>
//       <Button variant="outline">Edit Profile</Button>
//     </DialogTrigger>
//     <DialogContent className="sm:max-w-[425px]">
//       <DialogHeader>
//         <DialogTitle>Edit profile</DialogTitle>
//         <DialogDescription>
//           Make changes to your Todo here. Click save when you re done.
//         </DialogDescription>
//       </DialogHeader>
//       <div className="grid gap-4 py-4">
//         <div className="grid grid-cols-4 items-center gap-4">
//           <Label htmlFor="name" className="text-right">
//             Task
//           </Label>
//           <Input id="name" value="Pedro Duarte" className="col-span-3" />
//         </div>
        
//       </div>
//       <DialogFooter>
//         <Button type="submit">Save changes</Button>
//       </DialogFooter>
//     </DialogContent> 
//     </form>
//   </Dialog>
//   )
// }

// export default EditTodo

"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface EditTodoProps {
  id: string
  initialTitle: string
  editTodo: (id: string, title: string) => Promise<void>
}

const EditTodo: React.FC<EditTodoProps> = ({ id, initialTitle, editTodo }) => {
  const [title, setTitle] = useState(initialTitle)
  const [open, setOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await editTodo(id, title)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Edit {title}</DialogTitle>
            <DialogDescription>
              Make changes to your todo here. Click save when you re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Task
              </Label>
              <Input 
                id="title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                className="col-span-3" 
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default EditTodo

