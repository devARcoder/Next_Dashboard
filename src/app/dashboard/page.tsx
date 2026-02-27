import Card from "@/components/dashboard/Card";
import Heading from "@/components/shared/Heading";
import { Box, CalendarClock, CircleCheck, Zap } from "lucide-react";

const dashboardCardData = [
  {
    id: 1,
    icon: <Box className="text-sky-900"/>,
    colorName: "text-[#22C55E]",
    className: "bg-sky-500",
    percent: "+12",
    name: "Total Projects",
    number: 12
  },
  {
    id: 2,
    icon: <CircleCheck className="text-green-900"/>,
    colorName: "text-[#22C55E]",
    className: "bg-green-500",
    percent: "+8",
    name: "Tasks Completed",
    number: 84
  },
  {
    id: 3,
    icon: <CalendarClock className="text-orange-900"/>,
    colorName: "text-red-500",
    className: "bg-orange-400",
    percent: "-2",
    name: "Pending Tasks",
    number: 7
  },
  {
    id: 4,
    icon: <Zap className="text-blue-900"/>,
    colorName: "text-[#22C55E]",
    className: "bg-blue-400",
    percent: "+5",
    name: "Productivity Score",
    number: 92
  },

]

export default function DashboardPage(){
  return (
    <div>
      <Heading />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-9  py-9">
        {dashboardCardData.map((cardData) => (
          <div key={cardData.id}>
          <Card icon={cardData.icon} percent={cardData.percent} name={cardData.name} number={cardData.number} colorName={cardData.colorName} className={cardData.className}/>
          </div>
        ))}
        
      </div>
    </div>
  )
}