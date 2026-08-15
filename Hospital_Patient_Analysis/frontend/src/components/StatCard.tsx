import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
}

const StatCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
}: StatCardProps) => {
  return (
    <div
      className="
        flex items-center gap-5
        rounded-2xl
        border border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-colors duration-300

        dark:border-[#29303a]
        dark:bg-[#151a21]
      "
    >
      {/* Icon */}
      <div
        className="
          flex h-14 w-14
          shrink-0
          items-center justify-center
          rounded-2xl
          bg-orange-50
          text-orange-500

          dark:bg-orange-500/10
          dark:text-orange-400
        "
      >
        <Icon size={26} />
      </div>

      {/* Information */}
      <div>
        <p
          className="
            text-sm font-semibold
            text-slate-500
            dark:text-slate-400
          "
        >
          {title}
        </p>

        <h3
          className="
            mt-1
            text-3xl font-bold
            text-slate-900
            dark:text-white
          "
        >
          {value}
        </h3>

        <p
          className="
            mt-1
            text-sm
            text-slate-500
            dark:text-slate-400
          "
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default StatCard;