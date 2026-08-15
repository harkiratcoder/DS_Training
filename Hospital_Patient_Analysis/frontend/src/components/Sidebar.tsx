import { NavLink, useNavigate } from "react-router-dom";

import {
  Activity,
  BarChart3,
  ChevronLeft,
  Home,
  Info,
  Sparkles,
} from "lucide-react";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  onPredictionClick: () => void;
}

const navigation = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: Home,
  },
  {
    name: "Prediction",
    path: "/prediction",
    icon: Sparkles,
  },
  {
    name: "Analytics",
    path: "/dashboard",
    icon: BarChart3,
  },
  {
    name: "About",
    path: "/dashboard",
    icon: Info,
  },
];

const Sidebar = ({
  collapsed,
  onToggle,
  onPredictionClick,
}: SidebarProps) => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    navigate("/dashboard");

    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 150);
  };

  // Common styling for Prediction / Analytics / About
  const navigationButtonClass = `
    flex w-full items-center gap-4
    rounded-xl px-4 py-3.5
    font-semibold

    text-slate-600
    transition-all duration-200

    hover:bg-orange-50
    hover:text-orange-500

    dark:text-slate-300
    dark:hover:bg-orange-500/10
    dark:hover:text-orange-400
  `;

  return (
    <aside
      className={`
        fixed left-0 top-0 z-40
        flex h-screen flex-col

        border-r border-slate-200
        bg-white

        py-5

        transition-all duration-300

        dark:border-[#252c35]
        dark:bg-[#11161d]

        ${
          collapsed
            ? "w-[90px] px-4"
            : "w-[280px] px-5"
        }
      `}
    >
      {/* ================= LOGO ================= */}

      <div
        className={`
          flex items-center
          border-b border-slate-200
          pb-5

          dark:border-[#252c35]

          ${
            collapsed
              ? "justify-center"
              : "justify-between"
          }
        `}
      >
        <div className="flex items-center gap-3">
          {/* Logo */}

          <div
            className="
              flex h-12 w-12
              shrink-0
              items-center justify-center

              rounded-xl
              bg-orange-500
              text-white

              shadow-sm
            "
          >
            <Activity size={25} />
          </div>

          {/* Logo Text */}

          {!collapsed && (
            <div>
              <h1
                className="
                  text-[19px]
                  font-bold
                  text-slate-900

                  dark:text-slate-50
                "
              >
                Hospital AI
              </h1>

              <p
                className="
                  mt-0.5
                  text-xs
                  text-slate-500

                  dark:text-slate-400
                "
              >
                Healthcare Analytics
              </p>
            </div>
          )}
        </div>

        {/* Collapse Button */}

        {!collapsed && (
          <button
            onClick={onToggle}
            aria-label="Collapse sidebar"
            className="
              flex h-9 w-9
              items-center justify-center

              rounded-lg

              bg-slate-100
              text-slate-500

              transition

              hover:bg-slate-200
              hover:text-slate-700

              dark:bg-[#1b2129]
              dark:text-slate-400

              dark:hover:bg-[#252c35]
              dark:hover:text-white
            "
          >
            <ChevronLeft size={19} />
          </button>
        )}
      </div>

      {/* ================= NAVIGATION ================= */}

      <div className="mt-7">
        {!collapsed && (
          <p
            className="
              mb-3 px-3

              text-xs
              font-bold
              tracking-[0.12em]

              text-slate-400

              dark:text-slate-500
            "
          >
            NAVIGATION
          </p>
        )}

        <nav className="space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;

            /* ================= PREDICTION ================= */

            if (item.name === "Prediction") {
  return (
    <button
      key={item.name}
      onClick={() => {
        navigate("/dashboard");
        onPredictionClick();
      }}
      className="flex w-full items-center gap-4 rounded-xl px-4 py-3.5
      font-semibold text-slate-500 transition
      hover:bg-orange-50 hover:text-orange-500
      dark:text-slate-400 dark:hover:bg-orange-500/10
      dark:hover:text-orange-500"
    >
      <Icon size={21} />
      {!collapsed && item.name}
    </button>
  );
}

            /* ================= ANALYTICS ================= */

            if (item.name === "Analytics") {
              return (
                <button
                  key={item.name}
                  onClick={() =>
                    scrollToSection("analytics-section")
                  }
                  className={navigationButtonClass}
                >
                  <Icon
                    size={21}
                    className="shrink-0"
                  />

                  {!collapsed && (
                    <span>{item.name}</span>
                  )}
                </button>
              );
            }

            /* ================= ABOUT ================= */

            if (item.name === "About") {
              return (
                <button
                  key={item.name}
                  onClick={() =>
                    scrollToSection("about-section")
                  }
                  className={navigationButtonClass}
                >
                  <Icon
                    size={21}
                    className="shrink-0"
                  />

                  {!collapsed && (
                    <span>{item.name}</span>
                  )}
                </button>
              );
            }

            /* ================= DASHBOARD ================= */

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `
                    flex items-center gap-4
                    rounded-xl px-4 py-3.5

                    font-semibold

                    transition-all duration-200

                    ${
                      isActive
                        ? `
                          bg-orange-50
                          text-orange-500

                          dark:bg-[#4a2b1c]
                          dark:text-orange-400
                        `
                        : `
                          text-slate-600

                          hover:bg-orange-50
                          hover:text-orange-500

                          dark:text-slate-300
                          dark:hover:bg-orange-500/10
                          dark:hover:text-orange-400
                        `
                    }
                  `
                }
              >
                <Icon
                  size={21}
                  className="shrink-0"
                />

                {!collapsed && (
                  <span>{item.name}</span>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* ================= BOTTOM ================= */}

      {!collapsed && (
        <div
          className="
            mt-auto

            border-t
            border-slate-200

            pt-5

            dark:border-[#252c35]
          "
        >
          <div
            className="
              rounded-2xl
              border border-slate-200

              bg-slate-50

              px-4 py-4

              text-center

              shadow-sm

              dark:border-[#252c35]
              dark:bg-[#1a2027]
            "
          >
            <p
              className="
                text-xs
                font-medium
                leading-5

                text-slate-600

                dark:text-slate-300
              "
            >
              Hospital Patient Stay
              <br />
              Prediction System
            </p>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;