import type { ReactNode } from "react";

type IconName =
  | "quiet"
  | "size"
  | "foam"
  | "grip"
  | "clock"
  | "home"
  | "shield"
  | "bolt"
  | "user"
  | "sun"
  | "check"
  | "x";

const paths: Record<IconName, ReactNode> = {
  quiet: (
    <>
      <path d="M12 3v18M3 12h18" strokeLinecap="round" />
      <circle cx="12" cy="12" r="9" />
    </>
  ),
  size: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3a9 9 0 0 1 0 18" />
    </>
  ),
  foam: <path d="M12 2l3 7h7l-5.5 4.5 2 7L12 17l-6.5 3.5 2-7L2 9h7z" strokeLinejoin="round" />,
  grip: (
    <path d="M7 11V7a5 5 0 0 1 10 0v4M5 11h14v10H5z" strokeLinejoin="round" />
  ),
  clock: (
    <>
      <path d="M3 12a9 9 0 1 0 18 0" strokeLinecap="round" />
      <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  home: (
    <>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeLinejoin="round" />
      <path d="M9 22V12h6v10" strokeLinecap="round" />
    </>
  ),
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinejoin="round" />,
  bolt: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinejoin="round" />,
  user: (
    <>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" />
      <circle cx="12" cy="7" r="4" />
    </>
  ),
  sun: (
    <path
      d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
      strokeLinecap="round"
    />
  ),
  check: <path d="M5 12l4 4L19 6" strokeLinecap="round" strokeLinejoin="round" />,
  x: (
    <>
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </>
  ),
};

type IconProps = {
  name: IconName;
  className?: string;
  size?: number;
};

export default function Icon({ name, className, size = 24 }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
