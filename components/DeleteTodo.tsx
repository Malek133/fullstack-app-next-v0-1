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
import { useState } from "react"
interface TodoItemProps {
    id: string
    title:string
    onDelete: (id: string) => void
  }

export function DeleteTodo({onDelete,id,title}: TodoItemProps) {
    const [open, setOpen] = useState(false)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setOpen(false)
      }
  return (
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogTrigger asChild>
      <Button variant="destructive" size="sm">Delete</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
      <form onSubmit={handleSubmit}>
        <DialogHeader>
          <DialogTitle>Delete : {title}</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you re done.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit" className="bg-red-600"
          onClick={() => onDelete(id)}>Remove</Button>
          <Button type="submit">Cancel</Button>
        </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
