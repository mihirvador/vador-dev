const CompanyInfo = ({
  logo: Logo,
  name,
  role,
  isDarkMode,
  link,
}: {
  logo: React.ElementType;
  name: string;
  role: string;
  isDarkMode: boolean;
  link: string;
}) => {
  return (
    <div
      className={`flex items-center space-x-4 sm:items-start sm:text-left company-info ${
        isDarkMode ? "isDarkMode" : ""
      }`}
    >
      <Logo url={link} className="icon h-12 w-12" />
      <div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h2 className="underline-effect text-xl font-bold">{name}</h2>
        </a>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default CompanyInfo;
