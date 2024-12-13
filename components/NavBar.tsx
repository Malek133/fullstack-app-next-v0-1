import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './mode-toggle'
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
  import { currentUser } from '@clerk/nextjs/server'

const NavBar = async () => {
    const user = await currentUser();

    if (!user) return <div>...</div>

  return (
    <nav className="flex justify-between items-center p-4 bg-secondary">
      <span className='flex justify-center items-center gap-5'>
         <h1 className="text-2xl font-bold">
            <Link href={'/'}>
            Todo List
            </Link>
            </h1>
         <Link href='/Dashboard'>
          Dashboard
          </Link>
          <Link href='/AllTodo'>
          All Todo
          </Link>
        </span>
       
    <span className='flex justify-center items-center space-x-5 my-1 mx-3'>
    <Link href={'/profile'}>
    {user?.firstName}
    </Link>
            <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
    <ModeToggle />
      </span>
  </nav>
  )
}

export default NavBar