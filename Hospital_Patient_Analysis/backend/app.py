from flask import Flask, request, jsonify
from flask_cors import CORS

import pandas as pd
import joblib
import os


app = Flask(__name__)
CORS(app)


BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_DIR = os.path.join(BASE_DIR, "..", "models")


model = joblib.load(
    os.path.join(MODEL_DIR, "xgboost_model.pkl")
)

feature_columns = joblib.load(
    os.path.join(MODEL_DIR, "feature_columns.pkl")
)

label_encoders = joblib.load(
    os.path.join(MODEL_DIR, "label_encoders.pkl")
)


print("Model loaded successfully")
print("Expected features:", len(feature_columns))


STAY_MAPPING = {
    0: "0-10 Days",
    1: "11-20 Days",
    2: "21-30 Days",
    3: "31-40 Days",
    4: "41-50 Days",
    5: "51-60 Days",
    6: "61-70 Days",
    7: "71-80 Days",
    8: "81-90 Days",
    9: "91-100 Days",
    10: "More than 100 Days",
}


HOSPITAL_INFO = {
    1: {"type": "d", "city": 10, "region": "Y", "facility": "B"},
    2: {"type": "c", "city": 5, "region": "Z", "facility": "F"},
    3: {"type": "c", "city": 3, "region": "Z", "facility": "A"},
    4: {"type": "a", "city": 4, "region": "X", "facility": "F"},
    5: {"type": "a", "city": 1, "region": "X", "facility": "E"},
    6: {"type": "a", "city": 6, "region": "X", "facility": "F"},
    7: {"type": "a", "city": 4, "region": "X", "facility": "F"},
    8: {"type": "c", "city": 3, "region": "Z", "facility": "F"},
    9: {"type": "d", "city": 5, "region": "Z", "facility": "F"},
    10: {"type": "e", "city": 1, "region": "X", "facility": "E"},
    11: {"type": "b", "city": 2, "region": "Y", "facility": "D"},
    12: {"type": "a", "city": 9, "region": "Y", "facility": "B"},
    13: {"type": "a", "city": 5, "region": "Z", "facility": "F"},
    14: {"type": "a", "city": 1, "region": "X", "facility": "E"},
    15: {"type": "c", "city": 5, "region": "Z", "facility": "F"},
    16: {"type": "c", "city": 3, "region": "Z", "facility": "A"},
    17: {"type": "e", "city": 1, "region": "X", "facility": "E"},
    18: {"type": "d", "city": 13, "region": "Y", "facility": "B"},
    19: {"type": "a", "city": 7, "region": "Y", "facility": "C"},
    20: {"type": "b", "city": 2, "region": "Y", "facility": "D"},
    21: {"type": "c", "city": 3, "region": "Z", "facility": "A"},
    22: {"type": "g", "city": 9, "region": "Y", "facility": "B"},
    23: {"type": "a", "city": 6, "region": "X", "facility": "F"},
    24: {"type": "a", "city": 1, "region": "X", "facility": "E"},
    25: {"type": "e", "city": 1, "region": "X", "facility": "E"},
    26: {"type": "b", "city": 2, "region": "Y", "facility": "D"},
    27: {"type": "a", "city": 7, "region": "Y", "facility": "C"},
    28: {"type": "b", "city": 11, "region": "X", "facility": "F"},
    29: {"type": "a", "city": 4, "region": "X", "facility": "F"},
    30: {"type": "c", "city": 3, "region": "Z", "facility": "A"},
    31: {"type": "c", "city": 3, "region": "Z", "facility": "A"},
    32: {"type": "f", "city": 9, "region": "Y", "facility": "B"},
}


@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "success": True,
        "message": "Hospital Patient Stay Prediction API is running"
    })


@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()

        if not data:
            return jsonify({
                "success": False,
                "error": "No input data received."
            }), 400


        required_fields = [
            "hospitalCode",
            "department",
            "wardType",
            "admissionType",
            "severity",
            "ageGroup",
            "bedGrade",
            "availableRooms",
            "visitors",
            "cityCodePatient",
            "admissionDeposit",
        ]


        missing_fields = [
            field
            for field in required_fields
            if field not in data
            or data[field] is None
            or data[field] == ""
        ]


        if missing_fields:
            return jsonify({
                "success": False,
                "error": "Please provide all required patient details.",
                "missingFields": missing_fields
            }), 400


        hospital_code = int(data["hospitalCode"])


        if hospital_code not in HOSPITAL_INFO:
            return jsonify({
                "success": False,
                "error": "Invalid hospital code."
            }), 400


        hospital = HOSPITAL_INFO[hospital_code]


        patient_data = {
            "Hospital_code": hospital_code,

            "City_Code_Hospital":
                hospital["city"],

            "Available Extra Rooms in Hospital":
                int(data["availableRooms"]),

            "Bed Grade":
                float(data["bedGrade"]),

            "City_Code_Patient":
                float(data["cityCodePatient"]),

            "Severity of Illness":
                data["severity"],

            "Visitors with Patient":
                int(data["visitors"]),

            "Age":
                data["ageGroup"],

            "Admission_Deposit":
                float(data["admissionDeposit"]),

            "Hospital_type_code":
                hospital["type"],

            "Hospital_region_code":
                hospital["region"],

            "Department":
                data["department"],

            "Ward_Type":
                data["wardType"],

            "Ward_Facility_Code":
                hospital["facility"],

            "Type of Admission":
                data["admissionType"],
        }


        input_df = pd.DataFrame([patient_data])


        input_df["Age"] = (
            label_encoders["Age"]
            .transform(input_df["Age"])
        )


        input_df["Severity of Illness"] = (
            label_encoders["Severity of Illness"]
            .transform(input_df["Severity of Illness"])
        )


        categorical_columns = [
            "Hospital_type_code",
            "Hospital_region_code",
            "Department",
            "Ward_Type",
            "Ward_Facility_Code",
            "Type of Admission",
        ]


        input_df = pd.get_dummies(
            input_df,
            columns=categorical_columns
        )


        input_df = input_df.reindex(
            columns=feature_columns,
            fill_value=0
        )


        prediction = model.predict(input_df)[0]

        prediction_class = int(prediction)

        predicted_stay = STAY_MAPPING.get(
            prediction_class
        )


        if predicted_stay is None:
            return jsonify({
                "success": False,
                "error": "Unable to determine predicted stay."
            }), 500


        print(
            "Prediction:",
            predicted_stay
        )


        return jsonify({
            "success": True,
            "predictedStay": predicted_stay
        })


    except ValueError as error:
        return jsonify({
            "success": False,
            "error": str(error)
        }), 400


    except Exception as error:
        print("Prediction Error:", error)

        return jsonify({
            "success": False,
            "error": str(error)
        }), 500


if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5000,
        debug=False
    )