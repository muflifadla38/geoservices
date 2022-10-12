import { useTheme } from "next-themes";
import { MoonFillIcon, SunFillIcon } from "./Icons";

const DarkModeButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <button
        className="bg-slate-200 dark:bg-slate-700 text-gray-500 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-600 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 transition-all duration-300 ease-in-out"
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        {theme === "dark" ? (
          <SunFillIcon className="w-5 h-5" />
        ) : (
          <MoonFillIcon className="w-5 h-5" />
        )}
      </button>
    </>
  );
};

export default DarkModeButton;
