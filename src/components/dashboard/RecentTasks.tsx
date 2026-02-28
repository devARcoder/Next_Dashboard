import { PlusSquare } from 'lucide-react'
import React from 'react'
import RecentTasksCard from './RecentTasksCard'

const recentTasksData = [
    {
        id: 1,
        title: "Design System Update",
        stateTitle: "high",
        stateColor: "text-red-900 bg-[#F87171]"
    },
    {
        id: 2,
        title: "Team Sync Call",
        stateTitle: "medium",
        stateColor: "text-blue-900 bg-[#3B82F6]"
    },
    {
        id: 3,
        title: "Research Competitors",
        stateTitle: "low",
        stateColor: "text-[#94A3B8] bg-[#334155]"
    },
]

const RecentTasks = () => {
  return (
    <div className='border border-[#0F172A] p-5 rounded-xl bg-[#0F172A]'>
      <div className="heading flex justify-between items-center">
        <h1 className='text-2xl text-[#FFFFFF]'>Today Tasks</h1>
        <PlusSquare className='text-[#5048E5]' />
      </div>
      {recentTasksData.map((tasksData) => (
        <div key={tasksData.id}>
            <RecentTasksCard title={tasksData.title} stateTitle={tasksData.stateTitle} stateColor={tasksData.stateColor} />
        </div>
      ))}
    </div>
  )
}

export default RecentTasks
