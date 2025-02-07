import { ProjectCard } from "../components/project-card"
import { Header } from "../components/header"
import { Footer } from "../components/footer"

export default function ProjectsPage() {
  const projects = [
    {
        title: "Guitaro",
        description: "Building a Self-Playing Guitar using Arduino and Servo Motors. Will also use Machine Learning to compose Guitar Covers for any Song.",
        tags: ["Arduino", "AutoCAD", "3D Printing"],
        instagramUrl: "https://www.instagram.com/monkeysbuilding/",
    },
    {
        title: "Libro",
        description: "Creating a Reading App for iOS using React Native. The app will have features like Reading Progress, Book Recommendations, and a Friends List to share books with.",
        tags: ["React Native", "Vercel", "Typescript"],
        githubUrl: "https://github.com/mihirvador/Libro",
    },
    {
      title: "Diagnosing Multiple Sclerosis",
      description: "Designed Convolutional Neural Network (CNN) for both 3D and 2D MRI brain scans, to diagnose Multiple Sclerosis with an accuracy rate of 85% across various stages of the disease.",
      tags: ["Python", "Tensorflow", "Cuda"],
      githubUrl: "https://github.com/mihirvador/Diagnosing-Multiple-Sclerosis-Using-Machine-Learning",
    },
    
    {
      title: "Handwriting to Latex",
      description: "Digitized handwritten math by capturing images of handwritten symbols, using bounding boxes for detection, and classifying each with a trained model to convert into LaTeX. We improved efficiency by adopting FloodFill for symbol detection over traditional machine learning, overcoming challenges in model accuracy due to similar symbols and characters.",
      tags: ["Python", "Pytorch", "Matplotlib"],
      githubUrl: "https://github.com/rrseelam/image_to_LaTeX_translation",
    },
    {
      title: "Financial Models",
      description: "The Bollinger Bands algorithm generated a 43.23% profit on Microsoft stock using moving averages and standard deviations. The EMA10 RSI14 strategy yielded a 242.41% profit on Tesla by utilizing market condition indicators. The LSTM Machine Learning model accurately forecasted Google's closing prices, showcasing the power of neural networks in analyzing market dynamics.",
      tags: ["Python", "SciPy", "Numpy"],
      githubUrl: "https://github.com/mihirvador/Financial-Algorithms",
    },
    {
      title: "Predicting Mudslides",
      description: "The custom-developed method for predicting mudslides outperforms the Mohr-Coulomb method by 32%. It slightly underperforming compared to 2D modeling, but is nearly 10x faster. This demonstrates the model's effectiveness and efficiency in improving mudslide prediction accuracy and speed across various U.S. locations.",
      tags: ["R", "Web Scraping", "Mathematical Modeling"],
      githubUrl: "https://github.com/mihirvador/Predicting-Mudslides",
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

