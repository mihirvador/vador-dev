import { SunMoonIcon } from "./IconComponents";
import Link from "next/link";

const Header = ({
  isDarkMode,
  setIsDarkMode,
}: {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}) => {
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header
      className={`header flex justify-between items-center p-6 ${
        isDarkMode ? "isDarkMode" : ""
      }`}
    >
      <nav className="flex items-center space-x-4">
        <Link
          href="/"
          className={`link px-4 py-2 rounded-md ${
            isDarkMode ? "isDarkMode" : ""
          }`}
          prefetch={false}
        >
          <div className="text typing-animation">
            {">"}_ MV<span className="cursor"></span>
          </div>
        </Link>
        <Link
          href="/about"
          className={`link px-4 py-2 rounded-md ${
            isDarkMode ? "isDarkMode" : ""
          }`}
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="/projects"
          className={`link px-4 py-2 rounded-md ${
            isDarkMode ? "isDarkMode" : ""
          }`}
          prefetch={false}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className={`link px-4 py-2 rounded-md ${
            isDarkMode ? "isDarkMode" : ""
          }`}
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
      <button onClick={toggleDarkMode} className="button">
        <SunMoonIcon className="h-6 w-6 z-10 relative" />
      </button>
    </header>
  );
};

export default Header;
