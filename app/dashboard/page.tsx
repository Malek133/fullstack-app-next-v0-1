
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TodoItem } from '@/components/todo-item'
import { addTodo, deleteTodo, getTodos, toggleTodo } from "../actions/actions"


export default async function Home() {
  const todos = await getTodos()

  return (
    <div className="min-h-screen bg-background text-foreground">
      
      <main className="container mx-auto p-4">
        <form action={addTodo} className="flex gap-2 mb-4">
          <Input type="text" name="title" placeholder="Add a new todo" required />
          <Button type="submit">Add</Button>
        </form>
        <ul className="space-y-4">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))}
        </ul>
      </main>
    </div>
  )
}
