const globalTheme = {
  colors: {
    black: {
      space: "#000000",
      deep: "#0A0A0A",
      text: "#1a1a1a",
    },
    green: {
      matrix: "#00ff41",
      accent: "#6ef4a5",
      dim: "rgba(0, 255, 65, 0.15)",
      glow: "rgba(110, 244, 165, 0.2)",
    },
    white: {
      pure: "#ffffff",
      transparent: "rgba(255, 255, 255, 0.1)",
      ghost: "rgba(255, 255, 255, 0.05)",
    },
  },
  fonts: {
    display: "'East Sea Dokdo', cursive",
    body: "'Inter', sans-serif",
  },
  animations: {
    transition: {
      fast: "0.3s ease",
      medium: "0.5s ease-out",
      slow: "0.8s ease-in-out",
    },
    effects: {
      float: "ambient-float 8s ease-in-out infinite",
      scan: "scanning-line 8s linear infinite",
      pulse: "pulse-glow 2s ease-in-out infinite",
    },
  },
};

export default globalTheme;
