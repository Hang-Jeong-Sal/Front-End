import { createTheme } from '@mui/material/styles';

export const colors = {
  primary: "#005452",
  onPrimary: "#878B93",
  secondary: "rgba(0, 84, 82, 0.6)",
  onSecondary: "#BAB8B5",
  surface: "#F4F4F4",
  onSurface: "rgba(165, 165, 165, 1)",
  background: "#FFFFFF",
  onBackground: "rgba(0, 0, 0, 0.2)",
  error: "#FF0000"
}

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    error: {
      main: colors.error,
    },
  },
});