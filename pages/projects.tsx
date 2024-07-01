import React from "react";
import "../app/globals.css";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import { NeuralNetworkIcon } from "../components/IconComponents";

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
      logo: NeuralNetworkIcon,
    },
    {
      title: "Handwriting to Latex",
      link: "",
      github: "https://github.com/rrseelam/image_to_LaTeX_translation",
      description:
        "Digitized handwritten math by capturing images of handwritten symbols, using bounding boxes for detection, and classifying each with a trained model to convert into LaTeX. We improved efficiency by adopting FloodFill for symbol detection over traditional machine learning, overcoming challenges in model accuracy due to similar symbols and characters.",
      tech1: "Python",
      tech2: "Pytorch",
      tech3: "Matplotlib",
      logo: NeuralNetworkIcon,
    },
    {
      title: "Financial Models",
      link: "",
      github: "https://github.com/mihirvador/Financial-Algorithms",
      description:
        "The Bollinger Bands algorithm generated a 43.23% profit on Microsoft stock using moving averages and standard deviations. The EMA10 RSI14 strategy yielded a 242.41% profit on Tesla by utilizing market condition indicators. The LSTM Machine Learning model accurately forecasted Google's closing prices, showcasing the power of neural networks in analyzing market dynamics.",
      tech1: "Python",
      tech2: "SciPy",
      tech3: "Numpy",
      logo: NeuralNetworkIcon,
    },
    {
      title: "Predicting Mudslides",
      link: "",
      github: "https://github.com/mihirvador/Predicting-Mudslides",
      description:
        "The custom-developed method for predicting mudslides outperforms the Mohr-Coulomb method by 32%. It slightly underperforming compared to 2D modeling, but is nearly 10x faster. This demonstrates the model's effectiveness and efficiency in improving mudslide prediction accuracy and speed across various U.S. locations.",
      tech1: "R",
      tech2: "Web Scraping",
      tech3: "Mathematical Modeling",
      logo: NeuralNetworkIcon,
    },
  ];

  return (
    <div
      className={`main-container relative flex flex-col min-h-screen ${
        isDarkMode ? "isDarkMode" : ""
      } font-mono`}
    >
      <Header
        currentPage="projects"
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
