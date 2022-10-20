import { ReactNode } from "react";

export const DarkModeWrapper = ({ children }: { children: ReactNode }) => {
  let isDarkMode;
  if (typeof window !== "undefined") {
    const isDarkMode =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
  }
  return <div className={`${isDarkMode && "dark"}`}>{children}</div>;
};
