import ProjectsCards from "@/components/projects/ProjectsCards";

export default function ProjectPage(){
  return (
    <div>
      <div>
            <h2 className="text-2xl font-bold text-white">Projects</h2>
            <p className="text-[#94A3B8] text-sm">
              Overview of your repositories and development progress
            </p>
          </div>
      <ProjectsCards />
    </div>
  )
}