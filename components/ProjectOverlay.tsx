import { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

interface ProjectOverlayProps {
  projects: any[];
  activeIndex: number | null;
  cardRect: {
    top: number;
    left: number;
    width: number;
    height: number;
  };
  isDarkMode: boolean;
  setActiveIndex: (index: number | null) => void;
}

const ProjectOverlay = ({
  projects,
  activeIndex,
  cardRect,
  isDarkMode,
  setActiveIndex,
}: ProjectOverlayProps) => {
  const nodeRef = useRef(null); // Ref for CSSTransition

  // Manage visibility with local state
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (activeIndex !== null) {
      setShowOverlay(true);
    } else {
      setShowOverlay(false);
    }
  }, [activeIndex]);

  const handleBackgroundClick = () => {
    setActiveIndex(null);
  };

  return (
    <CSSTransition
      in={showOverlay}
      timeout={300}
      classNames="overlay"
      unmountOnExit
      nodeRef={nodeRef}
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out"
        style={{ opacity: showOverlay ? 1 : 0 }}
        onClick={handleBackgroundClick}
        ref={nodeRef}
      >
        <div
          className="absolute bg-white rounded-lg shadow-lg p-5"
          style={{
            top: "50%",
            left: "50%",
            width: "80vw",
            height: "60vh",
            transform: "translate(-50%, -50%)",
            backgroundColor: isDarkMode ? "#2a482a" : "#f0f8f0",
            color: isDarkMode ? "#ffffff" : "#000000",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {activeIndex !== null && (
            <>
              <h3 className="text-2xl font-bold">
                {projects[activeIndex].title}
              </h3>
              <p>{projects[activeIndex].description}</p>
              <a
                href={projects[activeIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                View Project
              </a>
            </>
          )}
        </div>
      </div>
    </CSSTransition>
  );
};

export default ProjectOverlay;
