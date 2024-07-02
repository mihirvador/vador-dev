import { SunMoonIcon } from "./IconComponents";
import Link from "next/link";

const Header = ({
  isDarkMode,
  setIsDarkMode,
  currentPage,
}: {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  currentPage: string;
}) => {
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header
      className={`header flex justify-between items-center p-2 sm:p-6 ${
        isDarkMode ? "isDarkMode" : ""
      }`}
    >
      <nav className="flex items-center space-x-1 sm:space-x-4">
        <div
          className={`link px-2 py-1 sm:px-4 sm:py-2 rounded-md ${
            isDarkMode ? "isDarkMode" : ""
          }`}
        >
          <Link href="/" prefetch={false}>
            <div className="text typing-animation">
              {">"}_ MV / {currentPage}
              <span className="cursor"></span>
            </div>
          </Link>
        </div>
        <div
          className={`link text-bold px-2 py-1 sm:px-4 sm:py-2 rounded-md ${
            isDarkMode ? "isDarkMode" : ""
          }`}
        >
          <Link href="/building" prefetch={false}>
            Actively Building
          </Link>
        </div>
        <div
          className={`link text-bold px-2 py-1 sm:px-4 sm:py-2 rounded-md ${
            isDarkMode ? "isDarkMode" : ""
          }`}
        >
          <Link href="/projects" prefetch={false}>
            Projects
          </Link>
        </div>
      </nav>
      <div>
        <button onClick={toggleDarkMode} className="button">
          <SunMoonIcon className="h-6 w-6 z-10 relative" />
        </button>
      </div>
    </header>
  );
};

export default Header;
