"use client";

import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProjectCard from "./ProjectCard";
import ProjectOverlay from "./ProjectOverlay";
import CompanyInfo from "./CompanyInfo";
import { GitlabIcon, MailIcon, LinkedinIcon, FileIcon } from "./IconComponents";

export default function MainPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [cardRect, setCardRect] = useState<DOMRect | null>(null);

  const handleCardClick = (index: number, rect?: DOMRect) => {
    setActiveIndex(index);
    setCardRect(rect || null);
  };

  const projects = [
    {
      title: "Project 1",
      link: "https://example.com/project1",
      description: "Detailed description of Project 1.",
    },
    {
      title: "Project 2",
      link: "https://example.com/project2",
      description: "Detailed description of Project 2.",
    },
  ];

  const companies = [
    {
      logo: "/placeholder.svg",
      name: "COMPANY - TEAM",
      role: "ROLE",
    },

    {
      logo: "/placeholder.svg",
      name: "COMPANY - TEAM",
      role: "ROLE",
    },

    {
      logo: "/placeholder.svg",
      name: "COMPANY - TEAM",
      role: "ROLE",
    },
    // Add more companies as needed
  ];

  return (
    <div
      className={`main-container relative flex flex-col min-h-screen ${
        isDarkMode ? "isDarkMode" : ""
      } font-mono`}
    >
      <Header
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        activeIndex={activeIndex}
      />
      {activeIndex !== null && cardRect && (
        <ProjectOverlay
          projects={projects}
          activeIndex={activeIndex}
          cardRect={cardRect}
          isDarkMode={isDarkMode}
          setActiveIndex={setActiveIndex}
        />
      )}
      <main
        className={`flex-grow overflow-auto px-6 md:px-12 lg:px-24 ${
          activeIndex !== null ? "blur" : ""
        }`}
      >
        <div className="flex flex-col items-center mt-4">
          <h1 className="text-4xl font-bold">Mihir Vador</h1>
          <p className="text-xl mt-2">Software Engineer. Temp.</p>
          <div className="flex space-x-4 mt-4">
            <GitlabIcon className="icon h-6 w-6" />
            <MailIcon className="icon h-6 w-6" />
            <LinkedinIcon className="icon h-6 w-6" />
            <FileIcon className="icon h-6 w-6" />
          </div>
          <div className="mt-8 space-y-8">
            {companies.map((company, index) => (
              <CompanyInfo
                key={index}
                logo={company.logo}
                name={company.name}
                role={company.role}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>
          <div className="mt-10">
            <h2 className="text-3xl font-bold text-center">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  index={index}
                  handleCardClick={handleCardClick}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer isDarkMode={isDarkMode} activeIndex={activeIndex} />
    </div>
  );
}
