import { GitlabIcon, HrefIcon, InstaIcon, TwitterIcon } from "./IconComponents";

interface CardProps {
  title: string;
  description: string;
  href?: string;
  github?: string;
  updateInsta?: string;
  updateTwitter?: string;
  tech1: string;
  tech2: string;
  tech3: string;
  isDarkMode: boolean;
  logo: React.ElementType;
}

const Card = ({
  title,
  description,
  href,
  github,
  updateInsta,
  updateTwitter,
  tech1,
  tech2,
  tech3,
  isDarkMode,
  logo: Logo,
}: CardProps) => (
  <div className="md p-4 md:w-1/3" style={{ maxWidth: "544px" }}>
    <div
      className={`h-full ${
        isDarkMode ? "isDarkMode" : ""
      } transform overflow-hidden rounded-md border-2 border-solid border-black bg-transparent bg-opacity-20 transition duration-500 hover-bg-custom`}
    >
      <div className="p-6">
        <div className="flex flex-row items-center justify-between">
          <div className="my-2">
            <Logo
              className={`${
                isDarkMode ? "isDarkMode" : ""
              } icon-no-hover h-12 w-12`}
            />
          </div>
          <div className="flex flex-row justify-between">
            <div className="mx-1.5">
              {href ? <HrefIcon url={href} className="icon h-6 w-6" /> : null}
            </div>
            <div className="mx-1.5">
              {github ? (
                <GitlabIcon url={github} className="icon h-6 w-6" />
              ) : null}
            </div>
            <div className="mx-1.5">
              {updateInsta ? (
                <InstaIcon url={updateInsta} className="icon h-6 w-6" />
              ) : null}
            </div>
            <div className="mx-1.5">
              {updateTwitter ? (
                <TwitterIcon url={updateTwitter} className="icon h-6 w-6" />
              ) : null}
            </div>
          </div>
        </div>
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {title}
        </h2>

        <p className="prose mb-3 max-w-none">{description}</p>
        <div className="flex flex-row justify-between">
          <div
            className={`text-sm transition duration-700 ${
              isDarkMode ? "text-white" : ""
            }`}
          >
            {tech1} &#8226; {tech2} &#8226; {tech3}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
