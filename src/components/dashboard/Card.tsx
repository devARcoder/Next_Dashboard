import React from 'react'

const Card = ({ className, icon, percent, name, number, colorName}: {className: string, icon: string, percent: string, name: string, number: number, colorName: string}) => {
  return (
    <>
    <div className='border border-[#1d2842] bg-[#0F172A] rounded-xl p-4 md:p-6 space-y-4 h-40'>
      <div className="flex justify-between items-center">
        <div className={`${className || ""} p-1 rounded-full`}>
        {icon}
        </div>
        <h1 className={`${colorName || ""} border px-2 rounded-md`}>{percent}%</h1>
      </div>
      <div className="flex flex-col space-y-1">
        <h1 className='text-[#94A3B8]'>{name}</h1>
        <p className='text-2xl font-semibold'>{number}</p>
      </div>
    </div>
    </>
    
  )
}

export default Card
