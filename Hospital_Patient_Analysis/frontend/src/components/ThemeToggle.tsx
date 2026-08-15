import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label="Toggle theme"
      className="
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-xl

        border
        border-slate-300
        bg-white
        text-slate-800

        transition-all
        duration-300

        hover:scale-105
        hover:bg-slate-100

        dark:border-slate-700
        dark:bg-slate-800
        dark:text-white
        dark:hover:bg-slate-700
      "
    >
      {theme === "dark" ? (
        <Sun
          size={21}
          className="text-yellow-400"
        />
      ) : (
        <Moon
          size={21}
          className="text-slate-700"
        />
      )}
    </button>
  );
};

export default ThemeToggle;