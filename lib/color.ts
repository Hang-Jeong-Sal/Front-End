import { createTheme } from '@mui/material/styles';

export const colors = {
  primary: "#005452",
  onPrimary: "#878B93",
  secondary: "rgba(0, 84, 82, 0.6)",
  onSecondary: "#BAB8B5",
  surface: "#F4F4F4",
  onSurface: "rgba(165, 165, 165, 1)",
  background: "#FFFFFF",
  onBackground: "rgba(0, 0, 0, 0)",
  onSuccess: "#005452",
  onSystem: "rgba(249, 249, 249, 0.94)",
  error: "#FF0000",
  onBlur: "#CCCCCC",
}

export const MainTheme = createTheme({
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
    warning: {
      main: colors.error,
    },
    info: {
      main: colors.onBackground,
      contrastText: colors.onBlur,
      light: colors.onBackground,
      dark: colors.background
    },
    success: {
      main: colors.onSuccess,
    },

  },
});

export const ButtonTheme = createTheme({
  palette: {
    primary: {
      main: colors.surface,
    },
    secondary: {
      main: colors.onSurface,
    },
  },
});

export const AppBarTheme = createTheme({
  palette: {
    primary: {
      main: colors.background,
    },
    secondary: {
      main: colors.onBackground,
    },
    common: {
      white: "#FFFFFF"
    },
  },
});

// https://developers.kakao.com/docs/latest/ko/kakaologin/design-guide
export const KakaoTheme = createTheme({
  palette: {
    primary: {
      main: "#FEE500"
    },
    secondary: {
      main: "#000000"
    },
    info :{
      main: "rgba(0, 0, 0, 0.85)"
    }
  }
});