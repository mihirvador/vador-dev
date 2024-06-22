const CompanyInfo = ({
  logo,
  name,
  role,
  isDarkMode,
}: {
  logo: string;
  name: string;
  role: string;
  isDarkMode: boolean;
}) => {
  return (
    <div
      className={`flex items-center space-x-4 company-info ${
        isDarkMode ? "isDarkMode" : ""
      }`}
    >
      <img src={logo} alt={`${name} logo`} className="h-12 w-12" />
      <div>
        <h2 className="text-xl font-bold">{name}</h2>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default CompanyInfo;
