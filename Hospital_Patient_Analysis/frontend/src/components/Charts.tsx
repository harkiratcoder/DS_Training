import Plot from "react-plotly.js";

/* =========================================================
   PATIENT STAY DISTRIBUTION
========================================================= */

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

  const formattedValues = patientCount.map((value) =>
    value >= 1000
      ? `${(value / 1000).toFixed(0)}K`
      : value.toString()
  );

  return (
    <Plot
      data={[
        {
          x: stayCategories,
          y: patientCount,
          type: "bar",

          marker: {
            color: "#F97316",
            line: {
              color: "#FB923C",
              width: 1,
            },
          },

          text: formattedValues,

          textposition: "outside",

          textfont: {
            size: 14,
            color: "#F8FAFC",
            family: "Inter, Arial, sans-serif",
          },

          cliponaxis: false,

          hovertemplate:
            "<b>Stay Duration: %{x} days</b><br>" +
            "Patients: %{y:,}" +
            "<extra></extra>",
        },
      ]}
      layout={{
        autosize: true,
        height: 400,

        margin: {
          l: 65,
          r: 25,
          t: 35,
          b: 65,
        },

        paper_bgcolor: "transparent",
        plot_bgcolor: "transparent",

        font: {
          family: "Inter, Arial, sans-serif",
          color: "#CBD5E1",
        },

        xaxis: {
          title: {
            text: "Stay Duration",
            font: {
              size: 14,
              color: "#94A3B8",
            },
          },

          tickfont: {
            size: 12,
            color: "#94A3B8",
          },

          fixedrange: true,

          showgrid: false,

          zeroline: false,
        },

        yaxis: {
          title: {
            text: "Number of Patients",
            font: {
              size: 14,
              color: "#94A3B8",
            },
          },

          tickfont: {
            size: 12,
            color: "#94A3B8",
          },

          gridcolor: "#334155",

          gridwidth: 1,

          zeroline: false,

          fixedrange: true,

          tickformat: "~s",
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


/* =========================================================
   DEPARTMENT BREAKDOWN
========================================================= */

export const DepartmentChart = () => {
  const departments = [
    "Gynecology",
    "Anesthesia",
    "Radiotherapy",
    "TB & Chest",
    "Surgery",
  ];

  const admissions = [40, 27, 16, 10, 7];

  const totalAdmissions = admissions.reduce(
    (sum, value) => sum + value,
    0
  );

  return (
    <Plot
      data={[
        {
          labels: departments,
          values: admissions,
          type: "pie",

          hole: 0.58,

          sort: false,
          direction: "clockwise",

          marker: {
            colors: [
              "#F97316",
              "#10B981",
              "#F59E0B",
              "#8B5CF6",
              "#94A3B8",
            ],

            line: {
              color: "#111827",
              width: 2,
            },
          },

          /* Show percentage inside the donut */
          textinfo: "percent",

          textposition: "inside",

          textfont: {
            size: 14,
            color: "#FFFFFF",
            family: "Inter, Arial, sans-serif",
          },

          hovertemplate:
            "<b>%{label}</b><br>" +
            "Share: %{percent}<br>" +
            "Value: %{value}<extra></extra>",
        },
      ]}
      layout={{
        autosize: true,

        height: 400,

        margin: {
          l: 20,
          r: 20,
          t: 20,
          b: 70,
        },

        paper_bgcolor: "transparent",

        font: {
          family: "Inter, Arial, sans-serif",
          color: "#CBD5E1",
        },

        /* Department names shown here instead of around the donut */
        legend: {
          orientation: "h",

          x: 0.5,
          xanchor: "center",

          y: -0.08,
          yanchor: "top",

          font: {
            size: 12,
            color: "#CBD5E1",
          },

          bgcolor: "transparent",
        },

        /* Center of donut */
        annotations: [
          {
            text:
              `<b>${totalAdmissions}%</b>` +
              "<br>" +
              "<span style='font-size:12px'>Total</span>",

            x: 0.5,
            y: 0.5,

            showarrow: false,

            font: {
              size: 24,
              color: "#FFFFFF",
              family: "Inter, Arial, sans-serif",
            },
          },
        ],
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