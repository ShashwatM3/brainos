import { Button } from '@/components/ui/button'
import React from 'react'
import { Brain } from 'lucide-react'

function Nav() {
  return (
    <div className='w-screen fixed mt-2 px-10 pt-4'>
      {/* <div className='bg-white px-5 py-4 rounded-full w-full flex items-center justify-between'> */}
      <div className='rounded-full w-full flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Brain/>
          <h3 className='text-xl font-bold'>BrainOS</h3>
        </div>
        <div className='flex items-center justify-center gap-7'>
          <h3>Use Cases</h3>
          <h3>Features</h3>
        </div>
        <Button>Join waitlist</Button>
      </div>
    </div>
  )
}

export default Nav