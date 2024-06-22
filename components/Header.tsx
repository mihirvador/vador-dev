import { SunMoonIcon } from "./IconComponents";

const Header = ({
  isDarkMode,
  setIsDarkMode,
  activeIndex,
}: {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
  activeIndex: number | null;
}) => {
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header
      className={`header ${isDarkMode ? "isDarkMode" : ""} ${
        activeIndex !== null ? "blur" : ""
      }`}
    >
      <div className="text">{">"}_ MV</div>
      <button onClick={toggleDarkMode} className="button">
        <SunMoonIcon className="h-6 w-6 z-10 relative" />
      </button>
    </header>
  );
};

export default Header;
