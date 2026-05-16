import Link from "next/link"
import { Footer } from "./components/footer"
import { WorkExperience } from "./components/work-experience"

export default function Page() {
  const links = [
    { label: "github", href: "https://github.com/mihirvador" },
    { label: "linkedin", href: "https://www.linkedin.com/in/mihirvador/" },
    { label: "email", href: "mailto:mvador@umich.edu" },
  ]

  return (
    <main className="professor-page mx-auto min-h-screen max-w-xl bg-white px-6 py-12 text-[17px] font-normal leading-7 text-black sm:px-8">
      <h1 className="mb-6 text-3xl font-normal leading-tight">mihir vador</h1>

      <p className="mb-4 max-w-xl">i love building cool things.</p>

      <p className="mb-4">
        current:{" "}
        <Link
          href="https://ephemeral.now"
          target="_blank"
          className="text-[#0000ee] underline visited:text-[#551a8b]"
        >
          ephemeral
        </Link>
      </p>

      <p className="mb-4">
        prev:{" "}
        <WorkExperience />
      </p>

      <p className="mb-4">
        elsewhere:{" "}
        {links.map((item, index) => (
          <span key={item.href}>
            <Link
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              className="text-[#0000ee] underline visited:text-[#551a8b]"
            >
              {item.label}
            </Link>
            {index < links.length - 1 ? " / " : null}
          </span>
        ))}
      </p>

      <Footer />
    </main>
  )
}
