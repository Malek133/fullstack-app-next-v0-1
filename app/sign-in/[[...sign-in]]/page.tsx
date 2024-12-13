import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <main className='grid my-9 place-items-center'>
      <SignIn />  
    </main>
  )
}