import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TodoItem } from '@/components/todo-item'

const prisma = new PrismaClient()

async function getTodos() {
  return await prisma.todo.findMany({
    orderBy: { createdAt: 'desc' },
  })
}

async function addTodo(data: FormData) {
  'use server'
  const title = data.get('title') as string
  await prisma.todo.create({ data: { title } })
  revalidatePath('/')
}

async function deleteTodo(id: string) {
  'use server'
  await prisma.todo.delete({ where: { id } })
  revalidatePath('/')
}

async function toggleTodo(id: string, completed: boolean) {
  'use server'
  await prisma.todo.update({ where: { id }, data: { completed } })
  revalidatePath('/')
}

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
