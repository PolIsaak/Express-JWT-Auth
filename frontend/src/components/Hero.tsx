import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='container mx-auto lg:min-w-[500px]'>
      <div>
        <h1 className="text-6xl uppercase font-bold">Backend Practice</h1>
        <h2 className="text-2xl">JWT Authorization & Authentication</h2>
      </div>
      <div className="mt-10">
        <Link href={'./login'} className="mr-4 px-5 py-2 rounded border-b border-white hover:text-gray-400 hover:border-gray-400">Log In</Link>
        <Link href={'./signup'} className="mx-4 px-5 py-2 rounded bg-white text-night hover:bg-gray-200">Sign Up</Link>
      </div>
    </div>
  )
}

export default Hero