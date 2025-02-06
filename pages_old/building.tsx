import React from "react";
import "../app/globals.css";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import { GuitarIcon, LibroIcon, HouseIcon } from "../components/IconComponents";

export default function Building() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const projects = [
    {
      title: "Guitaro",
      link: "",
      github: "",
      description:
        "Building a Self-Playing Guitar using Arduino and Servo Motors. Will also use Machine Learning to compose Guitar Covers for any Song.",
      tech1: "C",
      tech2: "Arduino",
      tech3: "Python",
      logo: GuitarIcon,
      insta: "https://www.instagram.com/monkeysbuilding/",
      twitter: "",
    },
    {
      title: "Libro",
      link: "",
      github: "https://github.com/mihirvador/Libro",
      description:
        "Creating a Reading App for Android and iOS using React Native. The app will have features like Reading Progress, Book Recommendations, and a Friends List to share books with.",
      tech1: "React Native",
      tech2: "Vercel",
      tech3: "Typescript",
      logo: LibroIcon,
      insta: "",
      twitter: "",
    },
    {
      title: "Fair Housing Pricing",
      link: "",
      github: "",
      description:
        "Creating a model to predict housing prices based on various factors like location, size, and amenities. Using Machine Learning to predict the prices of houses in a given area, and we are also working on a web application to display the results.",
      tech1: "Python",
      tech2: "Pytorch",
      tech3: "Pandas",
      logo: HouseIcon,
      insta: "",
      twitter: "",
    },
  ];

  return (
    <div
      className={`main-container relative flex flex-col min-h-screen ${
        isDarkMode ? "isDarkMode" : ""
      } font-mono`}
    >
      <Header
        currentPage="actively-building"
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />
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
                  logo={project.logo}
                  updateInsta={project.insta}
                  updateTwitter={project.twitter}
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
