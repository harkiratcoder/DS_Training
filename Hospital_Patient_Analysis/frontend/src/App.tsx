import { useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import MainLayout from "./components/MainLayout";
import PredictionModal from "./components/PredictionModal";

import Dashboard from "./pages/Dashboard";

function App() {
  const [predictionOpen, setPredictionOpen] =
    useState(false);

  return (
    <BrowserRouter>
      <MainLayout
        onPredictionClick={() =>
          setPredictionOpen(true)
        }
      >
        <Routes>

          <Route
            path="/"
            element={
              <Navigate
                to="/dashboard"
                replace
              />
            }
          />

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/prediction"
            element={
              <Navigate
                to="/dashboard"
                replace
              />
            }
          />

          <Route
            path="/analytics"
            element={
              <Navigate
                to="/dashboard"
                replace
              />
            }
          />

          <Route
            path="/about"
            element={
              <Navigate
                to="/dashboard"
                replace
              />
            }
          />

          <Route
            path="*"
            element={
              <Navigate
                to="/dashboard"
                replace
              />
            }
          />

        </Routes>
      </MainLayout>

      {predictionOpen && (
        <PredictionModal
          onClose={() =>
            setPredictionOpen(false)
          }
        />
      )}
    </BrowserRouter>
  );
}

export default App;