"use client"
// import Card from "@/components/dashboard/Card";
import DashboardCards from "@/components/dashboard/DashboardCards";
// import LanguagePieChart from "@/components/dashboard/LanguagePieChart";
import Productivity from "@/components/dashboard/Productivity";
// import ProjectsCard from "@/components/dashboard/ProjectsCard";
import RecentCommits from "@/components/dashboard/RecentCommits";
import RecentProjects from "@/components/dashboard/RecentProjects";
// import RecentTasks from "@/components/dashboard/RecentTasks";
import Heading from "@/components/shared/Heading";
// import { Boxes, Megaphone, Palette} from "lucide-react"; //  CalendarClock, CircleCheck, Box, Zap 
import Link from "next/link";

// const dashboardCardData = [
//   {
//     id: 1,
//     icon: <Box className="text-sky-900"/>,
//     colorName: "text-[#22C55E]",
//     className: "bg-sky-500",
//     percent: "+12",
//     name: "Total Projects",
//     number: 12
//   },
//   {
//     id: 2,
//     icon: <CircleCheck className="text-green-900"/>,
//     colorName: "text-[#22C55E]",
//     className: "bg-green-500",
//     percent: "+8",
//     name: "Tasks Completed",
//     number: 84
//   },
//   {
//     id: 3,
//     icon: <CalendarClock className="text-orange-900"/>,
//     colorName: "text-red-500",
//     className: "bg-orange-400",
//     percent: "-2",
//     name: "Pending Tasks",
//     number: 7
//   },
//   {
//     id: 4,
//     icon: <Zap className="text-blue-900"/>,
//     colorName: "text-[#22C55E]",
//     className: "bg-blue-400",
//     percent: "+5",
//     name: "Productivity Score",
//     number: 92
//   },
// ]

// const projectsCardData = [
//   {
//     id: 1,
//     icon: <Boxes />,
//     stateHeading: "on track",
//     title: "Mobile App API",
//     desc: "Backend developement and integration.",
//     progressPercent: "75%",
//     textColor: "bg-green-950 text-[#22C55E]",
//     iconColor: "text-[#6366F1]",
//     iconBgColor: "bg-blue-950"
//   },
//   {
//     id: 2,
//     icon: <Palette />,
//     stateHeading: "delayed",
//     title: "UI/UX Redesign",
//     desc: "Redesigning the core user experience.",
//     progressPercent: "32%",
//     textColor: "bg-orange-950 text-[#F97316]",
//     iconColor: "text-[#A855F7]",
//     iconBgColor: "bg-purple-950"
//   },
//   {
//     id: 3,
//     icon: <Megaphone />,
//     stateHeading: "planning",
//     title: "Marketing Launch",
//     desc: "Preparation for Q3 product launch.",
//     progressPercent: "12%",
//     textColor: "bg-sky-950 text-[#3B82F6]",
//     iconColor: "text-[#06B6D4]",
//     iconBgColor: "bg-sky-900"
//   },

// ]

export default function DashboardPage(){
  return (
    <div>
      <Heading />
      {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-9  py-9">
        {dashboardCardData.map((cardData) => (
          <div key={cardData.id}>
          <Card icon={cardData.icon} percent={cardData.percent} name={cardData.name} number={cardData.number} colorName={cardData.colorName} className={cardData.className}/>
          </div>
        ))}
        
      </div> */}
      <DashboardCards />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

  {/* Chart - 70% */}
  <div className="lg:col-span-8">
    <Productivity />
  </div>

  {/* Recent Tasks - 30% */}
  <div className="lg:col-span-4">
    {/* <RecentTasks /> */}
    <RecentCommits />
  </div>

</div>

<div className="">
  <div className="flex justify-between items-center py-8">
    <h1 className="text-2xl text-[#FFFFFF] font-semibold">Recent Projects</h1>
    <Link href="/projects" className='text-[#6366F1]'>View All Projects</Link>
  </div>
  {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

  {projectsCardData.map((projectsData) => (
    <div key={projectsData.id}>
       <ProjectsCard icon={projectsData.icon} stateHeading={projectsData.stateHeading} title={projectsData.title} desc={projectsData.desc} progressPercent={projectsData.progressPercent} textColor={projectsData.textColor} iconColor={projectsData.iconColor} iconBgColor={projectsData.iconBgColor} />
    </div>
  ))}
  </div> */}
  <RecentProjects />
</div>

{/* <div className="my-6">

<LanguagePieChart />
</div> */}
    </div>
  )
}