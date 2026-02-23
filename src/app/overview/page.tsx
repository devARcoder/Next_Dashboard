import Card from '@/components/Card'
import React from 'react'
import { Eye, User, Star } from 'lucide-react' // example icons

const page = () => {
  // Array of card data
  const cards = [
    { title: 'Total Views', value: '1.2K', icon: <Eye /> },
    { title: 'Total Users', value: '500', icon: <User /> },
    { title: 'Total Stars', value: '3.5K', icon: <Star /> },
  ]

  return (
    <div className=''>
      <h1 className='text-2xl font-bold text-white pb-10 '>Overview page</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} value={card.value} icon={card.icon} />
        ))}
      </div>
    </div>
  )
}

export default page