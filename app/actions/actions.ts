'use server'

import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'

const prisma = new PrismaClient()

export async function getTodos() {
  return await prisma.todo.findMany({
    orderBy: { createdAt: 'desc' },
  })
}

export async function addTodo(data: FormData) {
  'use server'
  const title = data.get('title') as string
  await prisma.todo.create({ data: { title } })
  revalidatePath('/')
}

export async function deleteTodo(id: string) {
  'use server'
  await prisma.todo.delete({ where: { id } })
  revalidatePath('/')
}

export async function toggleTodo(id: string, completed: boolean) {
  'use server'
  await prisma.todo.update({ where: { id }, data: { completed } })
  revalidatePath('/')
}


export async function editTodo(id: string,title:string) {
    'use server'
    await prisma.todo.update({ where: { id }, data: { title } })
    revalidatePath('/')
  }