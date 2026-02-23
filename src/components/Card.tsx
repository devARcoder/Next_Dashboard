import React from 'react'

const Card = ({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) => {
  return (
      
      <div className='flex items-center justify-between text-white bg-black/20 border border-white/10 w-full max-w-xs py-6 px-8 rounded-lg'>
        <div>
          <h1 className='text-white/80'>{title}</h1>
          <p className='text-xl font-bold'>{value}</p>
        </div>
        <div>
          {icon}
        </div>
      </div>
  )
}

export default Card