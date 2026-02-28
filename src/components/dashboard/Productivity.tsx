import React from 'react'
import Chart from './Chart'

const Productivity = () => {
  return (
    <div className='w-full h-80 lg:h-full  border border-[#0F172A] px-5 pb-20 rounded-2xl bg-[#0F172A]'>
      <div className="flex justify-between items-center py-6">
        <h1 className='text-2xl text-[#FFFFFF]'>Productivity Trends</h1>
        <h1>Last 7 Days</h1>
      </div>
      <Chart />
    </div>
  )
}

export default Productivity
