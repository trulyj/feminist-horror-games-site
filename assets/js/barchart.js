new Chart(document.getElementById("myChart"), {
  type: "bar",
  data: {
    labels: [
      "Violence", "Embodiment", "Motherhood", "Captivity",
      "Girlhood Horror", "Trauma / Mental Ill.", "Domesticity",
      "Woman-as-Monster", "Queer Themes", "Sexualized Violence"
    ],
    datasets: [{
      label: "Number of games",
      data: [63, 54, 47, 47, 45, 44, 20, 20, 11, 10],
      backgroundColor: [
        "#ef4444", "#34d399", "#c084fc", "#f87171",
        "#a78bfa", "#fb923c", "#f472b6", "#e879f9",
        "#38bdf8", "#f97316"
      ],
      hoverBackgroundColor: [
        "#f87171", "#6ee7b7", "#d8b4fe", "#fca5a5",
        "#c4b5fd", "#fdba74", "#f9a8d4", "#f0abfc",
        "#7dd3fc", "#fdba74"
      ],
      borderRadius: 3,
      borderSkipped: false,
    }]
  },
  options: {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 700,
      easing: "easeOutCubic",
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: ctx => ` ${ctx.parsed.x} games`
        }
      }
    },
    scales: {
      x: {
        max: 70,
        grid: { color: "rgba(255,255,255,0.07)" },
        ticks: {
          color: "rgba(255,255,255,0.55)",
          font: { size: 11 },
        },
        title: {
          display: true,
          text: "Number of games",
          color: "rgba(255,255,255,0.55)",
          font: { size: 11 },
        }
      },
      y: {
        grid: { display: false },
        ticks: {
          color: "rgba(255,255,255,0.55)",
          font: { size: 12 },
        }
      }
    }
  }
});
