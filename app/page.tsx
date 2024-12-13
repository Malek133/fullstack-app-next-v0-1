import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

import { currentUser } from '@clerk/nextjs/server'


    

const page = async () => {
  const user = await currentUser();
  return (
    <div className="grid my-9 place-items-center bg-background text-foreground">
    <h1 className='text-5xl'>
      Alphazero SM0
      </h1>
      {
        user ? (
          <p className='my-6'>Hello : {user?.firstName}</p>
        ):(
       <Link className='my-6' href={'/sign-in'}>
      <Button>Sign-in</Button>
      </Link>   
        )
      }
      
  </div>
  
  )
}

export default page

