const SHARED_COLORS = {
  primary: "#FFA500",
  facebook:'#4267B2',
  secondary: "#000022",
  app_base: "#F28C28",
  white: "#fff",
  button:"#2C3E50",
  gray:"#D3D3D3"
};

const theme = {
  lightTheme: {
    ...SHARED_COLORS,
    accent: "#4FDE9D",
    background: "#FFFFFF",
    text: "#000000",
    grayText: "#524B6B",
    disabled: "#F2EEFCAB",
    success: "#4FDE9D",
    warning: "#FCBE2B",
    error: "#FF0000",
    placeholder: "#D9D9D9",

  },

  darkTheme: {
    ...SHARED_COLORS,
    accent: "#4FDE9D",
    background: "#1C1C1C",
    text: "#FFFFFF",
    grayText: "#FFFFFF",
    disabled: "#525252",
    success: "#23D685",
    warning: "#FFDF8CB2",
    error: "#FF8A8A",
    placeholder: "#2C2C2C",
  },
};

export default theme;

// #E0E0E0;
// #828282
