"use client";

import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ProjectCard from "./ProjectCard";
import CompanyInfo from "./CompanyInfo";
import {
  GitlabIcon,
  MailIcon,
  LinkedinIcon,
  FileIcon,
  AVAVIcon,
  OrigamiRiskIcon,
  ARCIcon,
} from "./IconComponents";

export default function MainPage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
    {
      title: "Project 3",
      link: "https://example.com/project2",
      description: "Detailed description of Project 2.",
    },
  ];

  const companies = [
    {
      logo: AVAVIcon,
      name: "AeroVironment - Kinesis Team",
      role: "Software Engineering Intern",
      link: "https://www.avinc.com/",
    },

    {
      logo: ARCIcon,
      name: "ARC Gaming Lab - Behavior Cloning Team",
      role: "Machine Learning Research Assistant",
      link: "https://arc.engin.umich.edu/",
    },

    {
      logo: OrigamiRiskIcon,
      name: "Origami Risk - Infrastructure Team",
      role: "Software Engineering Intern",
      link: "https://www.origamirisk.com/",
    },
    // Add more companies as needed
  ];

  return (
    <div
      className={`main-container relative flex flex-col min-h-screen ${
        isDarkMode ? "isDarkMode" : ""
      } font-mono`}
    >
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main className={`flex-grow overflow-auto px-6 md:px-12 lg:px-24`}>
        <div className="flex flex-col items-center mt-2">
          <h1 className="text-4xl font-bold">Mihir Vador</h1>
          <p className="text-xl mt-2">Software Engineer. Builder. Audiophile</p>
          <div className="flex space-x-4 mt-4">
            <GitlabIcon
              url="https://github.com/mihirvador"
              className="icon h-6 w-6"
            />
            <MailIcon email="mvador@umich.edu" className="icon h-6 w-6" />
            <LinkedinIcon
              url="https://www.linkedin.com/in/mihir-vador-166b3b173/"
              className="icon h-6 w-6"
            />
            <FileIcon
              url="/Mihir_Vador_Resume_2026.pdf"
              className="icon h-6 w-6"
            />
          </div>
          <div className="mt-8 space-y-8">
            {companies.map((company, index) => (
              <CompanyInfo
                key={index}
                logo={company.logo}
                name={company.name}
                role={company.role}
                link={company.link}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>
          <div className="container mt-8 mb-4">
            <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
            <div className="-m-4 flex flex-wrap">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  href={project.link}
                  github={project.link}
                  tech1={project.description}
                  tech2={project.description}
                  tech3={project.description}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
