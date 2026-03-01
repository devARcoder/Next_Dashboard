const ProjectsCard = ({
  icon,
  stateHeading,
  title,
  desc,
  progressPercent,
  textColor,
  iconColor,
  iconBgColor,
}: {
  icon: React.ReactNode;
  stateHeading: string;
  title: string;
  desc: string;
  progressPercent: string;
  textColor: string;
  iconColor: string;
  iconBgColor: string;
}) => {

  // 🎯 Dynamic progress color based on status
  const getProgressColor = () => {
    switch (stateHeading.toLowerCase()) {
      case "on track":
        return "bg-[#6366F1]";
      case "delayed":
        return "bg-[#F97316]";
      case "planning":
        return "bg-[#06B6D4]";
      default:
        return "bg-blue-500";
    }
  };

  return (
    <div className="border border-[#0F172A] p-5 rounded-2xl bg-[#0F172A]">
      
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className={`${iconBgColor} p-2 rounded-xl`}>
          <span className={iconColor}>{icon}</span>
        </div>

        <h1 className={`${textColor} px-3 py-1 rounded-2xl text-xs font-semibold uppercase`}>
          {stateHeading}
        </h1>
      </div>

      {/* Title & Description */}
      <div className="py-4">
        <h1 className="text-white text-2xl line-clamp-1 font-semibold">{title}</h1>
        <p className="text-[#94A3B8]">{desc}</p>
      </div>

      {/* Progress */}
      <div>
        <div className="flex justify-between items-center py-1">
          <h1 className="text-[#94A3B8]">Progress</h1>
          <p className="text-white font-semibold">{progressPercent}</p>
        </div>

        <div className="h-3 rounded-full bg-black/20 flex items-center">
          <div
            className={`${getProgressColor()} h-2 rounded-full transition-all duration-500`}
            style={{ width: progressPercent }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;