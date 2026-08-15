import { Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar = ({ onMenuClick }: NavbarProps) => {
  return (
    <header
      className="
        flex
        items-center
        justify-between
        px-8
        py-5

        bg-white
        dark:bg-[#0F172A]

        border-b
        border-slate-200
        dark:border-slate-800

        transition-colors
        duration-300
      "
    >
      <button
        onClick={onMenuClick}
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl

          text-slate-700
          hover:bg-slate-100

          dark:text-slate-300
          dark:hover:bg-slate-800

          transition
        "
      >
        <Menu size={24} />
      </button>

      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Navbar;