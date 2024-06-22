const Footer = ({
  isDarkMode,
  activeIndex,
}: {
  isDarkMode: boolean;
  activeIndex: number | null;
}) => {
  return (
    <footer
      className={`footer w-full p-6 mt-8 ${isDarkMode ? "isDarkMode" : ""} ${
        activeIndex !== null ? "blur" : ""
      }`}
    >
      <div className="flex items-center space-x-4">
        <img src="/placeholder.svg" alt="Album Art" className="h-12 w-12" />
        <div>
          <p className="text-sm font-bold">Give in to Me - Lika Morgan</p>
          <p className="text-xs font-bold">made by Mihir Vador</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
