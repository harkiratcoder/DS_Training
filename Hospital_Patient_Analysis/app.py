import streamlit as st
import pandas as pd
import joblib

st.sidebar.title("🏥 Navigation")

page = st.sidebar.radio(
    "Go to",
    [
        "🏠 Home",
        "📊 Analytics",
        "🤖 Prediction",
        "📈 Model Performance",
        "ℹ️ About"
    ]
)

if page == "🏠 Home":

    st.title("🏥 Hospital Patient Stay Prediction")

    st.write("Welcome to the dashboard.")

elif page == "📊 Analytics":

    st.title("📊 Analytics Dashboard")

    st.write("Charts will be displayed here.")

elif page == "🤖 Prediction":

    st.title("🤖 Patient Stay Prediction")

    st.write("Prediction module coming soon.")

elif page == "📈 Model Performance":

    st.title("📈 Model Performance")

    st.write("Accuracy, Precision, Recall and F1 Score.")

elif page == "ℹ️ About":

    st.title("ℹ️ About")

    st.write("Hospital Stay Prediction Project")


st.set_page_config(
    page_title="Hospital Patient Stay Prediction",
    page_icon="🏥",
    layout="wide"
)
st.title("🏥 Hospital Patient Stay Prediction")
st.subheader("AI-Powered Healthcare Analytics Dashboard")
st.divider()
st.header("📄 Project Overview")

st.write("""
This application predicts the expected hospital stay duration
using Machine Learning. It also provides interactive analytics,
data exploration, and business insights to support healthcare
decision-making.
""")
# Kp Cards
st.divider()

st.header("📊 Dataset Overview")

df = pd.read_csv("data/raw/train_data.csv")

col1, col2, col3, col4 = st.columns(4)

total_patients = len(df)
total_hospitals = df["Hospital_code"].nunique()
total_departments = df["Department"].nunique()
stay_categories = df["Stay"].nunique()

with col1:
    st.metric("👥 Total Patients", f"{total_patients:,}")

with col2:
    st.metric("🏥 Hospitals", total_hospitals)

with col3:
    st.metric("🩺 Departments", total_departments)

with col4:
    st.metric("📅 Stay Categories", stay_categories)

