import { ProjectCard } from "../components/project-card"
import { Header } from "../components/header"
import { Footer } from "../components/footer"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Autonomous Navigation System",
      description: "Developed a robust navigation system for autonomous robots using deep learning and sensor fusion.",
      tags: ["Python", "PyTorch", "ROS"],
    },
    {
      title: "ML Infrastructure Pipeline",
      description: "Built scalable infrastructure for training and deploying machine learning models in production.",
      tags: ["Kubernetes", "TensorFlow", "Docker"],
    },
    {
      title: "Robot Control System",
      description: "Implemented advanced control algorithms for precise robotic manipulation tasks.",
      tags: ["C++", "ROS", "Control Theory"],
    },
    {
      title: "Computer Vision for Robotics",
      description: "Developed computer vision algorithms for object detection and tracking in robotic systems.",
      tags: ["OpenCV", "Python", "CUDA"],
    },
    {
      title: "Reinforcement Learning Framework",
      description:
        "Created a modular framework for implementing and testing various reinforcement learning algorithms.",
      tags: ["Python", "PyTorch", "OpenAI Gym"],
    },
    {
      title: "Distributed ML Training System",
      description: "Designed and implemented a distributed system for training large-scale machine learning models.",
      tags: ["Apache Spark", "Python", "HDFS"],
    },
  ]

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-theme-pink via-white to-theme-turquoise/20 dark:from-gray-900 dark:via-gray-800 dark:to-theme-turquoise/10">
      <Header />

      {/* Background Effect */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-24">
        <h1 className="mb-12 text-4xl font-bold text-center">Projects</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

