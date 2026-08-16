import { Heart} from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-12 rounded-3xl border border-slate-200 bg-white px-8 py-8 shadow-sm transition dark:border-[#2a313c] dark:bg-[#151a21]">
      
      <div className="mt-8 border-t border-slate-200 pt-6 text-center dark:border-[#2a313c]">
        <p className="flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          Made with
          <Heart
            size={15}
            className="fill-orange-500 text-orange-500"
          />
          using React • Flask • XGBoost
        </p>

        <p className="mt-2 text-xs text-slate-400">
          © 2026 Hospital Patient Stay Prediction System. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;