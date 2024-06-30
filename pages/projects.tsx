import React from "react";
import "../app/globals.css";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const projects = [
    {
      title: "Diagnosing Multiple Sclerosis",
      link: "",
      github:
        "https://github.com/mihirvador/Diagnosing-Multiple-Sclerosis-Using-Machine-Learning",
      description:
        "Designed Convolutional Neural Network (CNN) for both 3D and 2D MRI brain scans, to diagnose Multiple Sclerosis with an accuracy rate of 85% across various stages of the disease.",
      tech1: "Python",
      tech2: "Tensorflow",
      tech3: "Cuda",
    },
    {
      title: "Project 2",
      link: "",
      github:
        "https://github.com/mihirvador/Diagnosing-Multiple-Sclerosis-Using-Machine-Learning",
      description: "Detailed description of Project 2.",
      tech1: "Python",
      tech2: "Tensorflow",
      tech3: "Cuda",
    },
    {
      title: "Project 3",
      link: "https://example.com/project2",
      github:
        "https://github.com/mihirvador/Diagnosing-Multiple-Sclerosis-Using-Machine-Learning",
      description: "Detailed description of Project 2.",
      tech1: "Python",
      tech2: "Tensorflow",
      tech3: "Cuda",
    },
  ];

  return (
    <div
      className={`main-container relative flex flex-col min-h-screen ${
        isDarkMode ? "isDarkMode" : ""
      } font-mono`}
    >
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main className={`flex-grow overflow-auto px-6 md:px-12 lg:px-24`}>
        <div className="flex flex-col items-center mt-4">
          <div className="container mt-8 mb-4">
            <h1 className="text-4xl font-bold text-center mb-6">Projects</h1>
            <div className="-m-4 flex flex-wrap">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  href={project.link}
                  github={project.github}
                  tech1={project.tech1}
                  tech2={project.tech2}
                  tech3={project.tech3}
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
