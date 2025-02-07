import { Card, CardContent } from "@/components/ui/card"
import { AppleIcon, AVAVIcon, ARCIcon, OrigamiRiskIcon } from "./icons" 

export function WorkExperience() {
  const experiences = [
    {
      logo: <AppleIcon url="https://www.apple.com" className="h-12 w-12" />,
      company: "Apple",
      team: "Tools and Frameworks Team",
      title: "Software Engineering Intern",
    },
    {
      logo: <AVAVIcon url="https://www.avinc.com/" className="h-12 w-12" />,
      company: "AeroVironment",
      team: "Kinesis Team",
      title: "Software Engineering Intern",
    },
    {
        logo: <ARCIcon url="https://www.arc.com/" className="h-12 w-12" />,
        company: "Automative Research Center",
        team: "Behavioral Cloning Team",
        title: "Machine Learning Research Assistant",
      },
    {
      logo: <OrigamiRiskIcon url="https://www.origamirisk.com/" className="h-12 w-12" />,
      company: "Origami Risk",
      team: "Infrastructure Team",
      title: "Software Engineering Intern",
    },
  ]

  return (
    <div className="space-y-3">
      {experiences.map((exp, index) => (
        <Card
          key={index}
          className="border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm w-full max-w-xl"
        >
          <CardContent className="flex items-center py-4 px-6">
            <div className="mr-4">{exp.logo}</div>
            <div>
              <h4 className="font-bold text-xl text-gray-800 dark:text-gray-100">
                {exp.company} - {exp.team}
              </h4>
              <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                {exp.title}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

