import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from '@/components/mode-toggle'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todo List App',
  description: 'A simple todo list app built with Next.js, Prisma, and shadcn/ui',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <nav className="flex justify-between items-center p-4 bg-secondary">
        <h1 className="text-2xl font-bold">Todo List</h1>
        <span className='space-x-2 my-1 mx-3'>
        <Link href='/dashboard'>
        Dashboard
        </Link>
        <ModeToggle />
          </span>
      </nav>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

