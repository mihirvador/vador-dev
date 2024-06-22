import { useRef } from "react";

const ProjectCard = ({
  project,
  index,
  handleCardClick,
  isDarkMode,
}: {
  project: any;
  index: number;
  handleCardClick: (index: number, rect?: DOMRect) => void;
  isDarkMode: boolean;
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null); // Create a ref to the card element

  const onClick = () => {
    const rect = cardRef.current?.getBoundingClientRect(); // Capture the dimensions and position of the card
    handleCardClick(index, rect); // Pass both the index and the rectangle up to the MainPage
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className={`relative flex flex-col justify-between p-4 rounded-xl shadow-lg cursor-pointer overflow-hidden transition-all duration-300
        ${
          isDarkMode
            ? "bg-[#2a482a] text-white shadow-white/10"
            : "bg-white text-gray-800 shadow-black/25"
        }`}
    >
      <div className="flex flex-col items-center">
        <h3 className="text-lg font-bold text-center">{project.title}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;
