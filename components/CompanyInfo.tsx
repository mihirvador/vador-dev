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
      className={`flex items-center space-x-4 company-info ${
        isDarkMode ? "isDarkMode" : ""
      }`}
    >
      <Logo url={link} className="icon h-12 w-12" />
      <div>
        <h2 className="text-xl font-bold">{name}</h2>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default CompanyInfo;
