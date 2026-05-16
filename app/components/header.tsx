"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header className="mx-auto w-full max-w-xl px-5 py-5">
      <div className="flex items-center justify-between text-[#172015] dark:text-[#b9ef9a]">
        <Link
          href="/"
          className="font-mono text-xs lowercase hover:bg-[#b7ef73] dark:hover:bg-[#8fdc7a] dark:hover:text-[#050805]"
        >
          mihir@home
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 rounded-none text-[#172015] hover:bg-[#b7ef73] hover:text-[#172015] dark:text-[#b9ef9a] dark:hover:bg-[#8fdc7a] dark:hover:text-[#050805]"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun className="!h-3 !w-3" /> : <Moon className="!h-3 !w-3" />}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  )
}
