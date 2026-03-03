import React from 'react'

const Heading = ({title, para}:{title: string, para: string}) => {
  return (
    <div className='space-y-1 mt-3'>
      <h1 className='text-[#ffffff] font-bold text-2xl tracking-wide'>{title}</h1>
      <p className='text-[#94A3B8] font-normal'>{para}</p>
    </div>
  )
}

export default Heading
