'use client'

import { addTodo } from "@/app/actions/actions"
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
import { useState } from "react"

export function AddTodo() {

    const [open, setOpen] = useState(false)
    

  return (
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogTrigger asChild>
        <div className="my-6">
           <Button variant="default">
            Add New Todo</Button> 
        </div>
        
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Todo</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you re done.
          </DialogDescription>
        </DialogHeader>
        <form 
          action={addTodo} 
        >

            <Label htmlFor="name" 
            className="text-right">
              Name
            </Label>
            <Input type="text" 
            name="title" 
            placeholder="Add a new todo" 
            required />
          
        <DialogFooter className="my-5">
          <Button type="submit"
          onClick={() =>{
            setOpen(false);
          }}
          >Add Todo</Button>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
