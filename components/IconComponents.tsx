import { SVGProps } from "react";

export function FileIcon(props: SVGProps<SVGSVGElement> & { url: string }) {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      </svg>
    </a>
  );
}

export function HrefIcon(props: SVGProps<SVGSVGElement> & { url: string }) {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M 10.0002 5 H 8.2002 C 7.08009 5 6.51962 5 6.0918 5.21799 C 5.71547 5.40973 5.40973 5.71547 5.21799 6.0918 C 5 6.51962 5 7.08009 5 8.2002 V 15.8002 C 5 16.9203 5 17.4801 5.21799 17.9079 C 5.40973 18.2842 5.71547 18.5905 6.0918 18.7822 C 6.5192 19 7.07899 19 8.19691 19 H 15.8031 C 16.921 19 17.48 19 17.9074 18.7822 C 18.2837 18.5905 18.5905 18.2839 18.7822 17.9076 C 19 17.4802 19 16.921 19 15.8031 V 14 M 20 9 V 4 M 20 4 H 15 M 20 4 L 13 11" />
      </svg>
    </a>
  );
}

export function GitlabIcon(props: SVGProps<SVGSVGElement> & { url: string }) {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
      </svg>
    </a>
  );
}

export function LinkedinIcon(props: SVGProps<SVGSVGElement> & { url: string }) {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    </a>
  );
}

export function MailIcon(props: SVGProps<SVGSVGElement> & { email: string }) {
  return (
    <a href={`mailto:${props.email}`} target="_blank" rel="noopener noreferrer">
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    </a>
  );
}

export function MoonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

export function SunMoonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.9 4.9 1.4 1.4" />
      <path d="m17.7 17.7 1.4 1.4" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.3 17.7-1.4 1.4" />
      <path d="m19.1 4.9-1.4 1.4" />
    </svg>
  );
}

export function SpotifyIcon(props: SVGProps<SVGSVGElement> & { url: string }) {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <svg
        {...props}
        className="icon h-12 w-12"
        fill="currentColor"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <path d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z" />
      </svg>
    </a>
  );
}

export function AVAVIcon(props: SVGProps<SVGSVGElement> & { url: string }) {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <svg
        {...props}
        version="1.2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1556 400"
        width="1556"
        height="400"
        fill="currentColor"
      >
        <title>AVAV_BIG copy-svg</title>
        <defs>
          <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
            <path d="m-39.38-530.52h1735.22v1735.91h-1735.22z" />
          </clipPath>
        </defs>
        <g id="Clip-Path: Clip-Path: Page 1" clipPath="url(#cp1)">
          <g id="Clip-Path: Page 1">
            <g id="Page 1">
              <path
                id="Path 1"
                fillRule="evenodd"
                d="m1333.4 0.5c-57.8 0-71.5 39.4-81.1 57.5l-99.6 187.2c-10.4 20-17 28.5-26.3 38.1-23.6 24.3-48.3 24.1-78.5 24.1h-39.7v-306.9h-214.7v398.9h318.5c119.3 0 136.3-33.5 182-86.5 7.5-8.8 261.8-312.4 261.8-312.4zm-1071 86.7c-7.7 8.7-262.1 312.2-262.1 312.2h222.4c58 0 71.5-39.2 81.2-57.3l18.4-34.7h195v-92h-146l32.1-60.5c10.4-20 17.1-28.6 26.3-38.1 23.8-24.3 48.4-24.2 78.5-24.2h39.7v306.8h214.8v-398.9h-318.3c-119.4 0-136.6 33.6-182 86.7z"
              />
            </g>
          </g>
        </g>
      </svg>
    </a>
  );
}

export function OrigamiRiskIcon(
  props: SVGProps<SVGSVGElement> & { url: string }
) {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="150"
        height="100"
        viewBox="0 0 150 100"
        fill="none"
      >
        <defs>
          <style>
            {`
            .orl-1 { fill: #fff; }
            .orl-2 { fill: #5cbff8; }
            .orl-2, .orl-3 { isolation: isolate; }
            .orl-3 { fill: #0fa8f5; }
            .orl-4 { fill: #2ab0f5; }
          `}
          </style>
        </defs>
        <g xmlns="http://www.w3.org/2000/svg">
          <path
            className="orl-3"
            d="M57.24,49.03c-1,5.51-5.64,31.1-8.16,47.47l-.12,.4,.33-.06,24.38-24.18,.41-.4,.3-.57h-.21s-3.79-5.39-3.79-5.39l35.88-16.47,8.79-19.48,21.41-6.96-15.38-6.42-32.86,12.46-14.78-16.73C40.22,7.87,4.05,0,4.05,0l-.29,.07-.38,.12,.27,.24,13.65,12.37L0,11.63,57.24,49.03Zm62.41-30.84l-13.64,30.23-17.23-18.35,30.87-11.88Zm-46.32,53.68l-.22,.22-22.97,22.79c2.45-15.57,6.54-38.28,7.74-44.9l15.45,21.89ZM5.65,1.16c7.58,1.61,38.2,8,66.63,12.19l-15.14,34.47L5.65,1.16Z"
          />
          <path
            className="orl-1"
            d="M119.65,18.19l-13.64,30.23-17.23-18.35,30.87-11.88Zm-46.32,53.68l-.22,.22-22.97,22.79c2.45-15.57,6.54-38.28,7.74-44.9l15.45,21.89ZM5.65,1.16c7.58,1.61,38.2,8,66.63,12.19l-15.14,34.47L5.65,1.16Z"
          />
          <polygon
            className="orl-2"
            points="70.08 65.33 88.38 30.85 105.69 49.23 70.08 65.33"
          />
          <polygon
            className="orl-2"
            points="129.81 24.7 130.54 21.97 134.12 23.32 129.81 24.7"
          />
          <polygon
            className="orl-2"
            points="129.82 24.71 130.59 21.84 134.2 23.31 129.82 24.71"
          />
        </g>
      </svg>
    </a>
  );
}

export function ARCIcon(
  props: React.ImgHTMLAttributes<HTMLImageElement> & { url: string }
) {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <img {...props} src="/ARClogo.png"></img>
    </a>
  );
}
