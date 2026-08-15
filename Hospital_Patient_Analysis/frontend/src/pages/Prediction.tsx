import {
  Activity,
  Building2,
  HeartPulse,
  Sparkles,
  UserRound,
} from "lucide-react";
import { useState } from "react";
const Prediction = () => {
  const [showResult, setShowResult] = useState(false);
  return (
    <div className="space-y-6">
      {/* Page Heading */}
      <div>
        <p className="font-semibold text-orange-500">AI Prediction</p>

        <h1 className="mt-1 text-3xl font-bold text-slate-900">
          Patient Stay Prediction
        </h1>

        <p className="mt-2 text-slate-500">
          Enter patient and hospital information to predict the expected length
          of stay.
        </p>
      </div>

      {/* Prediction Form Card */}
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        {/* ================= PATIENT INFORMATION ================= */}

        <div className="mb-8">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
              <UserRound size={21} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Patient Information
              </h2>

              <p className="text-sm text-slate-500">Basic patient details</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {/* Age */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Age Group
              </label>

              <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-orange-400">
                <option>Select age group</option>
                <option>0-10</option>
                <option>11-20</option>
                <option>21-30</option>
                <option>31-40</option>
                <option>41-50</option>
                <option>51-60</option>
                <option>61-70</option>
                <option>71-80</option>
                <option>81-90</option>
                <option>91-100</option>
              </select>
            </div>

            {/* Gender */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Gender
              </label>

              <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-orange-400">
                <option>Select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            {/* Visitors */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Visitors with Patient
              </label>

              <input
                type="number"
                placeholder="Enter number"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-400"
              />
            </div>
          </div>
        </div>

        <hr className="border-slate-200" />

        {/* ================= HOSPITAL INFORMATION ================= */}

        <div className="my-8">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
              <Building2 size={21} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Hospital Information
              </h2>

              <p className="text-sm text-slate-500">
                Hospital and admission details
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {/* Hospital Code */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Hospital Code
              </label>

              <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-orange-400">
                <option>Select hospital</option>
                <option>Hospital 1</option>
                <option>Hospital 2</option>
                <option>Hospital 3</option>
              </select>
            </div>

            {/* Hospital Type */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Hospital Type
              </label>

              <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-orange-400">
                <option>Select type</option>
                <option>a</option>
                <option>b</option>
                <option>c</option>
              </select>
            </div>

            {/* Hospital Region */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Hospital Region
              </label>

              <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-orange-400">
                <option>Select region</option>
                <option>X</option>
                <option>Y</option>
                <option>Z</option>
              </select>
            </div>
          </div>
        </div>

        <hr className="border-slate-200" />

        {/* ================= MEDICAL DETAILS ================= */}

        <div className="my-8">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
              <HeartPulse size={21} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Medical Details
              </h2>

              <p className="text-sm text-slate-500">
                Clinical and admission information
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {/* Department */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Department
              </label>

              <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-orange-400">
                <option>Select department</option>
                <option>Gynecology</option>
                <option>Anesthesia</option>
                <option>Radiotherapy</option>
                <option>TB & Chest Disease</option>
                <option>Surgery</option>
              </select>
            </div>

            {/* Admission Type */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Admission Type
              </label>

              <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-orange-400">
                <option>Select admission type</option>
                <option>Emergency</option>
                <option>Trauma</option>
                <option>Urgent</option>
              </select>
            </div>

            {/* Severity */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Severity of Illness
              </label>

              <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-orange-400">
                <option>Select severity</option>
                <option>Minor</option>
                <option>Moderate</option>
                <option>Extreme</option>
              </select>
            </div>

            {/* Ward Type */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Ward Type
              </label>

              <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-orange-400">
                <option>Select ward type</option>
                <option>P</option>
                <option>Q</option>
                <option>R</option>
                <option>S</option>
                <option>T</option>
              </select>
            </div>

            {/* Bed Grade */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Bed Grade
              </label>

              <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-orange-400">
                <option>Select bed grade</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>

            {/* Admission Deposit */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Admission Deposit
              </label>

              <input
                type="number"
                placeholder="Enter deposit amount"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-orange-400"
              />
            </div>
          </div>
        </div>

        {/* ================= PREDICTION BUTTON ================= */}

        <div className="flex justify-end border-t border-slate-200 pt-7">
          <button
            onClick={() => setShowResult(true)}
            className="flex items-center gap-2 rounded-xl bg-orange-500 px-8 py-3.5 font-semibold text-white shadow-md transition hover:bg-orange-600"
          >
            <Sparkles size={19} />
            Predict Patient Stay
          </button>
        </div>
      </div>
      {/* Prediction Result Modal */}
{showResult && (

  <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm">

    {/* Modal */}
    <div className="w-[90%] max-w-xl overflow-hidden rounded-3xl bg-white shadow-2xl">

      {/* Modal Header */}
      <div className="flex items-center justify-between bg-slate-900 px-7 py-5">

        <div className="flex items-center gap-3 text-white">
          <Sparkles size={21} />

          <h2 className="text-lg font-bold">
            Patient Stay Prediction
          </h2>
        </div>

        <button
          onClick={() => setShowResult(false)}
          className="text-2xl text-white transition hover:text-orange-400"
        >
          ×
        </button>

      </div>


      {/* Result */}
      <div className="px-8 py-10 text-center">

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
          <Activity size={30} />
        </div>


        <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-slate-400">
          Predicted Hospital Stay
        </p>


        <h1 className="mt-3 text-4xl font-bold text-slate-900">
          21–30 Days
        </h1>


        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-500">
          Estimated length of hospital stay based on the provided
          patient and admission information.
        </p>

      </div>


      {/* Bottom */}
      <div className="flex justify-end border-t border-slate-200 bg-slate-50 px-7 py-5">

        <button
          onClick={() => setShowResult(false)}
          className="rounded-xl bg-orange-500 px-7 py-3 font-semibold text-white transition hover:bg-orange-600"
        >
          Done
        </button>

      </div>

    </div>

  </div>

)}
    </div>
  );
};


export default Prediction;
