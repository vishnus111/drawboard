import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-y-4'>
      <div>
      This is a screen for authentication
      </div>
      <div>
        <UserButton/>
      </div>
    </div>
  )
}

export default page