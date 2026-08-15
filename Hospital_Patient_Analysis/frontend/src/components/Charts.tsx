import Plot from "react-plotly.js";

export const StayDistributionChart = () => {
  const stayCategories = [
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
    "100+",
  ];

  const patientCount = [
    23000,
    34000,
    87000,
    55000,
    34000,
    23000,
    19000,
    15000,
    9000,
    6000,
    3000,
  ];

  return (
    <Plot
      data={[
        {
          x: stayCategories,
          y: patientCount,
          type: "bar",
          marker: {
            color: "#f97316",
          },
          hovertemplate:
            "Stay: %{x} days<br>Patients: %{y:,}<extra></extra>",
        },
      ]}
      layout={{
        autosize: true,
        height: 350,

        margin: {
          l: 55,
          r: 20,
          t: 20,
          b: 50,
        },

        paper_bgcolor: "transparent",
        plot_bgcolor: "transparent",

        xaxis: {
          title: {
            text: "Stay Duration",
          },
          fixedrange: true,
        },

        yaxis: {
          title: {
            text: "Patients",
          },
          gridcolor: "#e5e7eb",
          fixedrange: true,
        },

        showlegend: false,
      }}
      config={{
        displayModeBar: false,
        responsive: true,
      }}
      style={{
        width: "100%",
      }}
    />
  );
};


export const DepartmentChart = () => {
  const departments = [
    "Gynecology",
    "Anesthesia",
    "Radiotherapy",
    "TB & Chest",
    "Surgery",
  ];

  const admissions = [
    40,
    27,
    16,
    10,
    7,
  ];

  return (
    <Plot
      data={[
        {
          labels: departments,
          values: admissions,
          type: "pie",

          hole: 0.6,

          marker: {
            colors: [
              "#f97316",
              "#10b981",
              "#f59e0b",
              "#8b5cf6",
              "#94a3b8",
            ],
          },

          textinfo: "none",

          hovertemplate:
            "%{label}<br>%{percent}<extra></extra>",
        },
      ]}
      layout={{
        autosize: true,
        height: 350,

        margin: {
          l: 20,
          r: 20,
          t: 20,
          b: 20,
        },

        paper_bgcolor: "transparent",

        showlegend: false,
      }}
      config={{
        displayModeBar: false,
        responsive: true,
      }}
      style={{
        width: "100%",
      }}
    />
  );
};