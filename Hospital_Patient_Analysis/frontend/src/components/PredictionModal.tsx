import { useState } from "react";
import {
  CheckCircle2,
  Loader2,
  Sparkles,
  X,
} from "lucide-react";

interface PredictionModalProps {
  onClose: () => void;
}

interface FormData {
  hospitalCode: string;
  department: string;
  wardType: string;
  admissionType: string;
  severity: string;
  ageGroup: string;
  bedGrade: string;
  availableRooms: string;
  visitors: string;
  cityCodePatient: string;
  admissionDeposit: string;
}


// =========================================================
// INITIAL FORM DATA
// =========================================================

const initialFormData: FormData = {
  hospitalCode: "",
  department: "",
  wardType: "",
  admissionType: "",
  severity: "",
  ageGroup: "",
  bedGrade: "",
  availableRooms: "",
  visitors: "",
  cityCodePatient: "",
  admissionDeposit: "",
};


// =========================================================
// DROPDOWN OPTIONS
// =========================================================

const departments = [
  "TB & Chest disease",
  "anesthesia",
  "gynecology",
  "radiotherapy",
  "surgery",
];

const wardTypes = [
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
];

const admissionTypes = [
  "Emergency",
  "Trauma",
  "Urgent",
];

const severities = [
  "Extreme",
  "Minor",
  "Moderate",
];

const ageGroups = [
  "0-10",
  "11-20",
  "21-30",
  "31-40",
  "41-50",
  "51-60",
  "61-70",
  "71-80",
  "81-90",
  "91-100",
];

const hospitalCodes = Array.from(
  { length: 32 },
  (_, index) => index + 1
);


// =========================================================
// COMPONENT
// =========================================================

const PredictionModal = ({
  onClose,
}: PredictionModalProps) => {

  const [formData, setFormData] =
    useState<FormData>(initialFormData);

  const [loading, setLoading] =
    useState(false);

  const [predictedStay, setPredictedStay] =
    useState<string | null>(null);

  const [error, setError] =
    useState<string>("");


  // =======================================================
  // HANDLE INPUT CHANGE
  // =======================================================

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {

    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };


  // =======================================================
  // VALIDATE FORM
  // =======================================================

  const validateForm = () => {

    for (const value of Object.values(formData)) {

      if (value === "") {
        return false;
      }

    }

    return true;
  };


  // =======================================================
  // PREDICT
  // =======================================================

  const handlePredict = async () => {

    if (!validateForm()) {

      setError(
        "Please complete all patient admission details."
      );

      return;
    }


    try {

      setLoading(true);
      setError("");


      // ---------------------------------------------------
      // SEND DATA TO FLASK
      // ---------------------------------------------------

      const response = await fetch(
        "http://127.0.0.1:5000/predict",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );


      const result = await response.json();


      // ---------------------------------------------------
      // CHECK BACKEND RESPONSE
      // ---------------------------------------------------

      if (!response.ok || !result.success) {

        throw new Error(
          result.error ||
          "Unable to generate prediction."
        );

      }


      // ---------------------------------------------------
      // SAVE PREDICTED STAY
      // ---------------------------------------------------

      setPredictedStay(
        result.predictedStay
      );

    }

    catch (err) {

      console.error(err);


      if (err instanceof Error) {

        setError(err.message);

      } else {

        setError(
          "Unable to connect to prediction server."
        );

      }

    }

    finally {

      setLoading(false);

    }

  };


  // =======================================================
  // RESULT FLASH CARD
  // =======================================================

  if (predictedStay !== null) {

    return (

      <div
        className="
          fixed inset-0 z-50

          flex items-center
          justify-center

          bg-slate-950/75

          p-4

          backdrop-blur-md
        "
      >

        <div
          className="
            w-full
            max-w-[480px]

            rounded-[26px]

            border
            border-slate-200

            bg-white

            p-9

            text-center

            shadow-2xl

            dark:border-[#303844]
            dark:bg-[#151a21]
          "
        >

          {/* SUCCESS ICON */}

          <div
            className="
              mx-auto

              flex h-16 w-16
              items-center
              justify-center

              rounded-2xl

              bg-orange-50
              text-orange-500

              dark:bg-orange-500/10
            "
          >

            <CheckCircle2 size={32} />

          </div>


          {/* RESULT LABEL */}

          <p
            className="
              mt-6

              text-sm
              font-semibold

              text-slate-500

              dark:text-slate-400
            "
          >
            Predicted Patient Stay
          </p>


          {/* ACTUAL PREDICTION */}

          <h2
            className="
              mt-2

              text-4xl
              font-bold

              text-slate-900

              dark:text-white
            "
          >
            {predictedStay}
          </h2>


          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-4

              max-w-sm

              leading-7

              text-slate-500

              dark:text-slate-400
            "
          >
            Estimated hospital stay based on the
            provided patient and admission details.
          </p>


          {/* DONE BUTTON */}

          <button
            onClick={onClose}

            className="
              mt-8

              w-full

              rounded-xl

              bg-orange-500

              px-6
              py-3.5

              font-semibold
              text-white

              shadow-lg
              shadow-orange-500/20

              transition

              hover:bg-orange-600
            "
          >
            Done
          </button>

        </div>

      </div>

    );

  }


  // =======================================================
  // PREDICTION FORM
  // =======================================================

  return (

    <div
      className="
        fixed inset-0 z-50

        flex items-center
        justify-center

        overflow-y-auto

        bg-slate-950/75

        p-5

        backdrop-blur-md
      "
    >

      <div
        className="
          my-auto

          w-full
          max-w-[960px]

          overflow-hidden

          rounded-[24px]

          border
          border-slate-200

          bg-white

          shadow-2xl

          dark:border-[#303844]
          dark:bg-[#151a21]
        "
      >


        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="
            flex items-center
            justify-between

            border-b
            border-slate-200

            bg-[#111c35]

            px-8
            py-6

            dark:border-[#29313b]
            dark:bg-[#111827]
          "
        >

          <div className="flex items-center gap-3">

            <Sparkles
              size={27}
              className="text-orange-500"
            />

            <div>

              <h2
                className="
                  text-xl
                  font-bold
                  text-white
                "
              >
                Patient Stay Predictor
              </h2>

              <p
                className="
                  mt-0.5
                  text-sm
                  text-slate-400
                "
              >
                Enter patient admission details
              </p>

            </div>

          </div>


          {/* CLOSE BUTTON */}

          <button
            onClick={onClose}

            className="
              rounded-lg
              p-2

              text-slate-300

              transition

              hover:bg-white/10
              hover:text-white
            "
          >

            <X size={22} />

          </button>

        </div>


        {/* =================================================
            FORM
        ================================================= */}

        <div
          className="
            max-h-[67vh]
            overflow-y-auto

            px-8
            py-7
          "
        >

          <div
            className="
              grid
              grid-cols-1

              gap-x-6
              gap-y-5

              md:grid-cols-2
            "
          >


            {/* HOSPITAL CODE */}

            <Field label="Hospital Code">

              <select
                name="hospitalCode"
                value={formData.hospitalCode}
                onChange={handleChange}
                className={inputStyle}
              >

                <option value="">
                  Select hospital code
                </option>

                {hospitalCodes.map((code) => (

                  <option
                    key={code}
                    value={code}
                  >
                    Hospital {code}
                  </option>

                ))}

              </select>

            </Field>


            {/* DEPARTMENT */}

            <Field label="Department">

              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className={inputStyle}
              >

                <option value="">
                  Select department
                </option>

                {departments.map((item) => (

                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>

                ))}

              </select>

            </Field>


            {/* WARD TYPE */}

            <Field label="Ward Type">

              <select
                name="wardType"
                value={formData.wardType}
                onChange={handleChange}
                className={inputStyle}
              >

                <option value="">
                  Select ward type
                </option>

                {wardTypes.map((item) => (

                  <option
                    key={item}
                    value={item}
                  >
                    Ward {item}
                  </option>

                ))}

              </select>

            </Field>


            {/* ADMISSION TYPE */}

            <Field label="Admission Type">

              <select
                name="admissionType"
                value={formData.admissionType}
                onChange={handleChange}
                className={inputStyle}
              >

                <option value="">
                  Select admission type
                </option>

                {admissionTypes.map((item) => (

                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>

                ))}

              </select>

            </Field>


            {/* SEVERITY */}

            <Field label="Severity of Illness">

              <select
                name="severity"
                value={formData.severity}
                onChange={handleChange}
                className={inputStyle}
              >

                <option value="">
                  Select severity
                </option>

                {severities.map((item) => (

                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>

                ))}

              </select>

            </Field>


            {/* AGE */}

            <Field label="Age Group">

              <select
                name="ageGroup"
                value={formData.ageGroup}
                onChange={handleChange}
                className={inputStyle}
              >

                <option value="">
                  Select age group
                </option>

                {ageGroups.map((item) => (

                  <option
                    key={item}
                    value={item}
                  >
                    {item} Years
                  </option>

                ))}

              </select>

            </Field>


            {/* BED GRADE */}

            <Field label="Bed Grade">

              <select
                name="bedGrade"
                value={formData.bedGrade}
                onChange={handleChange}
                className={inputStyle}
              >

                <option value="">
                  Select bed grade
                </option>

                <option value="1">
                  Grade 1
                </option>

                <option value="2">
                  Grade 2
                </option>

                <option value="3">
                  Grade 3
                </option>

                <option value="4">
                  Grade 4
                </option>

              </select>

            </Field>


            {/* AVAILABLE ROOMS */}

            <Field label="Available Extra Rooms">

              <input
                type="number"

                name="availableRooms"

                min="0"

                value={
                  formData.availableRooms
                }

                onChange={handleChange}

                placeholder="Enter available rooms"

                className={inputStyle}
              />

            </Field>


            {/* VISITORS */}

            <Field label="Visitors with Patient">

              <input
                type="number"

                name="visitors"

                min="0"

                value={
                  formData.visitors
                }

                onChange={handleChange}

                placeholder="Enter number of visitors"

                className={inputStyle}
              />

            </Field>


            {/* CITY CODE */}

            <Field label="Patient City Code">

              <input
                type="number"

                name="cityCodePatient"

                min="1"

                value={
                  formData.cityCodePatient
                }

                onChange={handleChange}

                placeholder="Enter patient city code"

                className={inputStyle}
              />

            </Field>


            {/* ADMISSION DEPOSIT */}

            <Field label="Admission Deposit">

              <input
                type="number"

                name="admissionDeposit"

                min="0"

                step="0.01"

                value={
                  formData.admissionDeposit
                }

                onChange={handleChange}

                placeholder="Enter admission deposit"

                className={inputStyle}
              />

            </Field>

          </div>


          {/* =================================================
              ERROR MESSAGE
          ================================================= */}

          {error && (

            <div
              className="
                mt-6

                rounded-xl

                border
                border-red-200

                bg-red-50

                px-4
                py-3

                text-sm
                font-medium
                text-red-600

                dark:border-red-500/20
                dark:bg-red-500/10
                dark:text-red-400
              "
            >
              {error}
            </div>

          )}

        </div>


        {/* =================================================
            FOOTER
        ================================================= */}

        <div
          className="
            flex
            justify-end
            gap-3

            border-t
            border-slate-200

            bg-slate-50

            px-8
            py-5

            dark:border-[#29313b]
            dark:bg-[#11161d]
          "
        >

          {/* CANCEL */}

          <button
            onClick={onClose}
            disabled={loading}

            className="
              rounded-xl

              border
              border-orange-500

              px-6
              py-3

              font-semibold
              text-orange-500

              transition

              hover:bg-orange-50

              disabled:opacity-50

              dark:hover:bg-orange-500/10
            "
          >
            Cancel
          </button>


          {/* PREDICT */}

          <button
            onClick={handlePredict}
            disabled={loading}

            className="
              flex
              min-w-[155px]

              items-center
              justify-center
              gap-2

              rounded-xl

              bg-orange-500

              px-6
              py-3

              font-semibold
              text-white

              shadow-lg
              shadow-orange-500/20

              transition

              hover:bg-orange-600

              disabled:cursor-not-allowed
              disabled:opacity-60
            "
          >

            {loading ? (

              <>
                <Loader2
                  size={18}
                  className="animate-spin"
                />

                Predicting...
              </>

            ) : (

              <>
                <Sparkles size={18} />

                Predict Stay
              </>

            )}

          </button>

        </div>

      </div>

    </div>

  );

};


// =========================================================
// FIELD COMPONENT
// =========================================================

interface FieldProps {
  label: string;
  children: React.ReactNode;
}


const Field = ({
  label,
  children,
}: FieldProps) => {

  return (

    <div>

      <label
        className="
          mb-2
          block

          text-sm
          font-semibold

          text-slate-700

          dark:text-slate-200
        "
      >
        {label}
      </label>

      {children}

    </div>

  );

};


// =========================================================
// INPUT STYLE
// =========================================================

const inputStyle = `
  h-[52px]

  w-full

  rounded-xl

  border
  border-slate-200

  bg-slate-50

  px-4

  text-slate-800

  outline-none

  transition

  placeholder:text-slate-400

  focus:border-orange-400

  focus:ring-2
  focus:ring-orange-500/10

  dark:border-[#303844]

  dark:bg-[#0f141a]

  dark:text-slate-100

  dark:placeholder:text-slate-500
`;


export default PredictionModal;