import { useState } from "react";
import type { ReactNode } from "react";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

interface MainLayoutProps {
  children: ReactNode;
  onPredictionClick: () => void;
}

const MainLayout = ({
  children,
  onPredictionClick,
}: MainLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className="
        min-h-screen
        bg-slate-50
        text-slate-900

        dark:bg-[#0b1015]
        dark:text-white

        transition-colors
        duration-300
      "
    >
      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
        onPredictionClick={onPredictionClick}
      />

      <div
        className={`
          min-h-screen
          transition-all
          duration-300

          ${
            collapsed
              ? "ml-[90px]"
              : "ml-[280px]"
          }

          bg-slate-50
          dark:bg-[#0b1015]
        `}
      >
        <Navbar
          onMenuClick={() =>
            setCollapsed(!collapsed)
          }
        />

        <main
          className="
            min-h-screen
            px-8
            pb-10

            bg-slate-50
            dark:bg-[#0b1015]

            transition-colors
            duration-300
          "
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;