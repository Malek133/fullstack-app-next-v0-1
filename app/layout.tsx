import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import NavBar from '@/components/NavBar'
import {
  ClerkProvider,
} from '@clerk/nextjs'

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
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
       <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html></ClerkProvider>
  )
}

