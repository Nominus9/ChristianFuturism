import globalTheme from "../theme.js";

export const getRGBFromHex = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  return [r, g, b];
};

export const getThemeColor = (path) => {
  return path.split(".").reduce((obj, key) => obj[key], globalTheme.colors);
};

export const getThemeFont = (key) => {
  return globalTheme.fonts[key];
};
