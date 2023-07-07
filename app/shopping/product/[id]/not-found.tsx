import React from 'react'

function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center space-y-5'>
      <h1 className='text-4xl font-bold'>Whoopss...</h1>
      <h2 className='font-extralight animate-pulse'>It looks  likes the product could not be found!</h2>
    </div>
  )
}

export default NotFound
