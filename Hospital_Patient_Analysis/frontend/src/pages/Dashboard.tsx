import { useState } from "react";

import Footer from "../components/Footer";
import {
  Activity,
  BarChart3,
  Building2,
  CalendarDays,
  CheckCircle2,
  Database,
  FolderOpen,
  Settings2,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import StatCard from "../components/StatCard";
import DatasetModal from "../components/DatasetModal";
import {
  DepartmentChart,
  StayDistributionChart,
} from "../components/Charts";

const Dashboard = () => {
  

  const [datasetOpen, setDatasetOpen] = useState(false);

  const openDatasetSummary = () => {
    setDatasetOpen(true);
  };

  return (
    <div className="space-y-8">

      {/* ================= HERO SECTION ================= */}

      <section
        className="
          rounded-3xl
          border border-orange-200
          bg-orange-50
          p-10

          dark:border-orange-500/30
          dark:bg-[#15120f]
        "
      >
        <div className="flex items-center justify-between gap-10">

          {/* Left Side */}

          <div className="max-w-3xl">

            <div className="mb-5 flex items-center gap-4">

              <div
                className="
                  flex h-14 w-14
                  items-center justify-center

                  rounded-2xl

                  bg-white
                  text-orange-500
                  shadow-sm

                  dark:bg-[#211a15]
                "
              >
                <Activity size={28} />
              </div>

              <div>

                <h1
                  className="
                    text-4xl
                    font-bold

                    text-slate-900
                    dark:text-white
                  "
                >
                  Hospital Patient Stay Prediction
                </h1>

                <p className="mt-1 font-semibold text-orange-500">
                  AI Powered Healthcare Analytics Dashboard
                </p>

              </div>

            </div>

            <p
              className="
                max-w-2xl
                text-lg
                leading-8

                text-slate-500
                dark:text-slate-400
              "
            >
              Predict the expected length of stay of patients using
              machine learning models and data-driven insights.
            </p>

            {/* Buttons */}

            <div className="mt-7 flex gap-4">

              

              <button
                onClick={openDatasetSummary}
                className="
    flex items-center gap-2
    rounded-xl
    bg-orange-500
    px-6 py-3
    font-semibold
    text-white
    shadow-md
    transition
    hover:bg-orange-600
  "
              >
                <BarChart3 size={19} />
                Explore Dataset
              </button>

            </div>

          </div>

          {/* Right Illustration */}

          <div
            className="
              hidden

              rounded-3xl
              bg-orange-100
              p-8

              dark:bg-[#211a15]

              lg:block
            "
          >
            <img
              src="/hospital.png"
              alt="Hospital"
              className="h-48 w-80 object-contain"
            />
          </div>

        </div>

      </section>
            {/* ================= STATISTICS ================= */}

      <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Total Records"
          value="318,438"
          subtitle="Patient Records"
          icon={Database}
        />

        <StatCard
          title="Hospitals"
          value="32"
          subtitle="Across Regions"
          icon={Building2}
        />

        <StatCard
          title="Departments"
          value="11"
          subtitle="Medical Departments"
          icon={Users}
        />

        <StatCard
          title="Stay Categories"
          value="11"
          subtitle="Prediction Classes"
          icon={Target}
        />

      </section>

      {/* ================= ABOUT SECTION ================= */}

      <section
        id="about-section"
        className="
          scroll-mt-8
          grid grid-cols-1 gap-6
          lg:grid-cols-2
        "
      >

        {/* Project Objective */}

        <div
          className="
            rounded-2xl
            border border-slate-200
            bg-white
            p-7
            shadow-sm

            dark:border-[#29303a]
            dark:bg-[#151a21]
          "
        >

          <div className="mb-5 flex items-center gap-3">

            <Target
              size={24}
              className="text-orange-500"
            />

            <h2
              className="
                text-xl
                font-bold

                text-slate-900
                dark:text-white
              "
            >
              Project Objective
            </h2>

          </div>

          <p
            className="
              leading-7

              text-slate-500
              dark:text-slate-400
            "
          >
            Predict how long a patient is expected to stay in
            the hospital using Machine Learning algorithms.
            This helps hospitals improve operational workflows
            and resource utilization.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">

            <div className="flex items-center gap-2">
              <CheckCircle2
                size={18}
                className="text-orange-500"
              />
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Bed Management
              </span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2
                size={18}
                className="text-orange-500"
              />
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Resource Allocation
              </span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2
                size={18}
                className="text-orange-500"
              />
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Patient Scheduling
              </span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2
                size={18}
                className="text-orange-500"
              />
              <span className="font-medium text-slate-700 dark:text-slate-200">
                Operational Planning
              </span>
            </div>

          </div>

        </div>

        {/* ================= ABOUT DATASET ================= */}

        <div
          className="
            rounded-2xl
            border border-slate-200
            bg-white
            p-7
            shadow-sm

            dark:border-[#29303a]
            dark:bg-[#151a21]
          "
        >

          <div className="mb-5 flex items-center gap-3">

            <Database
              size={24}
              className="text-orange-500"
            />

            <h2
              className="
                text-xl
                font-bold

                text-slate-900
                dark:text-white
              "
            >
              About the Dataset
            </h2>

          </div>

          <p
            className="
              leading-7

              text-slate-500
              dark:text-slate-400
            "
          >
            The dataset contains detailed information about
            patients including demographics, admission
            details, hospital information and clinical
            attributes used for predicting patient stay.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">

            <div
              className="
                rounded-xl
                border border-slate-200
                bg-slate-50
                p-3

                dark:border-[#29303a]
                dark:bg-[#10151b]
              "
            >
              <FolderOpen
                size={20}
                className="mb-2 text-orange-500"
              />

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Source
              </p>

              <p className="font-bold text-slate-800 dark:text-white">
                Kaggle
              </p>
            </div>

            <div
              className="
                rounded-xl
                border border-slate-200
                bg-slate-50
                p-3

                dark:border-[#29303a]
                dark:bg-[#10151b]
              "
            >
              <CalendarDays
                size={20}
                className="mb-2 text-orange-500"
              />

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Records
              </p>

              <p className="font-bold text-slate-800 dark:text-white">
                318K+
              </p>
            </div>

            <div
              className="
                rounded-xl
                border border-slate-200
                bg-slate-50
                p-3

                dark:border-[#29303a]
                dark:bg-[#10151b]
              "
            >
              <Settings2
                size={20}
                className="mb-2 text-orange-500"
              />

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Features
              </p>

              <p className="font-bold text-slate-800 dark:text-white">
                39
              </p>
            </div>

            <div
              className="
                rounded-xl
                border border-slate-200
                bg-slate-50
                p-3

                dark:border-[#29303a]
                dark:bg-[#10151b]
              "
            >
              <Sparkles
                size={20}
                className="mb-2 text-orange-500"
              />

              <p className="text-xs text-slate-500 dark:text-slate-400">
                Project
              </p>

              <p className="font-bold text-slate-800 dark:text-white">
                2026
              </p>

            </div>

          </div>

        </div>

      </section>
            {/* ================= ANALYTICS ================= */}

      <section
        id="analytics-section"
        className="
          scroll-mt-8
          grid grid-cols-1 gap-6
          xl:grid-cols-5
        "
      >

        {/* Patient Stay Distribution */}

        <div
          className="
            rounded-2xl
            border border-slate-200
            bg-white
            p-6
            shadow-sm

            dark:border-[#29303a]
            dark:bg-[#151a21]

            xl:col-span-3
          "
        >

          <div className="mb-2">

            <h2
              className="
                text-xl
                font-bold

                text-slate-900
                dark:text-white
              "
            >
              Patient Stay Distribution
            </h2>

            <p
              className="
                mt-1
                text-sm

                text-slate-500
                dark:text-slate-400
              "
            >
              Distribution of stay length across categories
            </p>

          </div>

          <StayDistributionChart />

        </div>

        {/* Department Breakdown */}

        <div
          className="
            rounded-2xl
            border border-slate-200
            bg-white
            p-6
            shadow-sm

            dark:border-[#29303a]
            dark:bg-[#151a21]

            xl:col-span-2
          "
        >

          <div className="mb-2">

            <h2
              className="
                text-xl
                font-bold

                text-slate-900
                dark:text-white
              "
            >
              Department Breakdown
            </h2>

            <p
              className="
                mt-1
                text-sm

                text-slate-500
                dark:text-slate-400
              "
            >
              Admissions volume split by department
            </p>

          </div>

          <DepartmentChart />

        </div>

      </section>

      {/* ================= DATASET MODAL ================= */}

      <DatasetModal
        isOpen={datasetOpen}
        onClose={() => setDatasetOpen(false)}
        darkMode={document.documentElement.classList.contains("dark")}
      />
<Footer />
    </div>
  );
};

export default Dashboard;