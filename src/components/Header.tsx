import Image from 'next/image'
import React from 'react'

const Header = ({ className }: { className?: string }) => {
  return (
    <div className={`${className || ''} flex items-center justify-between p-4 border border-white/80`}>
      <Image className='rounded-full md:hidden' src="/arlogo.png" width={40} height={40} alt="Logo" />
      <h1 className="text-2xl font-bold">
        Dashboard
      </h1>
      <h1></h1>
    </div>
  )
}

export default Header
