import { Database, X } from "lucide-react";

interface DatasetModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

const rows = [
  ["Dataset Source", "Kaggle - Healthcare Analytics II"],
  ["Patient Records", "318,438"],
  ["Hospitals", "32"],
  ["Departments", "5"],
  ["Hospital Types", "7"],
  ["Hospital Regions", "3"],
  ["Ward Types", "6"],
  ["Input Features", "39"],
  ["Stay Categories", "11"],
  ["Prediction Method", "Machine Learning"],
];

const DatasetModal = ({
  isOpen,
  onClose,
  darkMode,
}: DatasetModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm">

      <div
        className={`w-[620px] rounded-2xl overflow-hidden shadow-2xl border ${
          darkMode
            ? "bg-[#151a21] border-[#29303a]"
            : "bg-white border-slate-200"
        }`}
      >

        {/* Header */}

        <div
          className={`flex items-center justify-between px-6 py-5 border-b ${
            darkMode
              ? "bg-[#11161d] border-[#29303a]"
              : "bg-orange-50 border-slate-200"
          }`}
        >
          <div className="flex items-center gap-3">

            <div
              className={`h-11 w-11 rounded-xl flex items-center justify-center ${
                darkMode
                  ? "bg-orange-500/10"
                  : "bg-orange-100"
              }`}
            >
              <Database
                size={22}
                className="text-orange-500"
              />
            </div>

            <div>
              <h2
                className={`text-xl font-bold ${
                  darkMode
                    ? "text-white"
                    : "text-slate-900"
                }`}
              >
                Dataset Summary
              </h2>

              <p
                className={`text-sm ${
                  darkMode
                    ? "text-slate-400"
                    : "text-slate-500"
                }`}
              >
                Hospital Patient Stay Prediction
              </p>
            </div>

          </div>

          <button
            onClick={onClose}
            className={`rounded-lg p-2 transition ${
              darkMode
                ? "hover:bg-[#232b35]"
                : "hover:bg-orange-100"
            }`}
          >
            <X
              size={20}
              className={
                darkMode
                  ? "text-slate-300"
                  : "text-slate-600"
              }
            />
          </button>
        </div>

        {/* Table */}

        <div className="px-6 py-5">

          <table className="w-full">

            <tbody>

              {rows.map(([property, value], index) => (

                <tr
                  key={property}
                  className={`${
                    index !== rows.length - 1
                      ? darkMode
                        ? "border-b border-[#29303a]"
                        : "border-b border-slate-200"
                      : ""
                  }`}
                >

                  <td
                    className={`py-3 font-medium ${
                      darkMode
                        ? "text-slate-300"
                        : "text-slate-700"
                    }`}
                  >
                    {property}
                  </td>

                  <td
                    className={`py-3 text-right font-semibold ${
                      darkMode
                        ? "text-white"
                        : "text-slate-900"
                    }`}
                  >
                    {value}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

          <button
            onClick={onClose}
            className="mt-6 w-full rounded-xl bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600 transition"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
};

export default DatasetModal;