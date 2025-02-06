import { Github, Linkedin, Mail, ArrowRight, File } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "./components/header"
import { Footer } from "./components/footer"
import { WorkExperience } from "./components/work-experience"

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-theme-pink via-white to-theme-turquoise/20 dark:from-gray-900 dark:via-gray-800 dark:to-theme-turquoise/10">
      <Header />

      {/* Background Effect */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />

      {/* Diagonal Divider */}
      <div
        className="absolute bottom-0 right-0 h-[150%] w-[150%] origin-bottom-right -rotate-45 transform bg-theme-turquoise/10 dark:bg-theme-turquoise/5"
        style={{
          clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)",
        }}
      />

      {/* Main Content - shifted up a bit using a negative margin */}
      <main className="relative z-10 container mx-auto px-4 py-24 lg:mt-20">
        <div className="flex flex-col md:flex-row md:justify-between md:gap-12">
          {/* Left Section - Main Info */}
          <div className="max-w-xl">
            <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              Mihir Vador
            </h1>
            <h2 className="mb-6 text-2xl font-semibold text-gray-700 dark:text-gray-300 md:text-3xl lg:text-4xl">
              Engineering
              <span className="mt-2 block bg-gradient-to-r from-theme-turquoise to-theme-pink bg-clip-text text-transparent">
                the Future
              </span>
            </h2>

            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
              Infrastructure - Machine Learning - Robotics
            </p>

            <div className="flex items-center gap-6">
              <Link href="/projects">
                <Button className="group bg-theme-turquoise hover:bg-theme-turquoise/90 dark:bg-theme-pink dark:text-gray-900 dark:hover:bg-theme-pink/90">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              <div className="flex gap-4">
                <Link href="https://github.com/mihirvador" target="_blank">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-theme-turquoise/10 dark:hover:bg-theme-pink/10"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/mihirvador/" target="_blank">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-theme-turquoise/10 dark:hover:bg-theme-pink/10"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:mvador@umich.edu">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-theme-turquoise/10 dark:hover:bg-theme-pink/10"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
                <Link href="/Mihir_Vador_Resume.pdf" target="_blank">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full hover:bg-theme-turquoise/10 dark:hover:bg-theme-pink/10"
                  >
                    <File className="h-5 w-5" />
                    <span className="sr-only">Resume</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Section - Work Experience */}
          <div className="mt-12 max-w-xl md:mt-0">
            <h3 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              Work Experience
            </h3>
            <WorkExperience />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}