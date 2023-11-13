import { grey } from "@mui/material/colors";
import { createTheme, ThemeOptions } from "@mui/material/styles";

export const materialUiThemeLight: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#3ED8C3",
      light: "#6BE1D1",
      dark: "#00A19F",
      contrastText: "#fff",
    },
    secondary: {
      main: "#00B1EB",
      light: "#1AC6FF",
      dark: "#008AB8",
      contrastText: "#fff",
    },
    error: {
      main: "#E7343F",
      light: "#E94952",
      dark: "#CD1823",
      contrastText: "#fff",
    },
    warning: {
      main: "#EF7D00",
      contrastText: "#fff",
      dark: "#AB003C",
    },
    info: {
      main: "#1D4477",
      light: "#275BA0",
      dark: "#132D4E",
    },
    success: {
      main: "#5AB88F",
    },
    text: {
      primary: grey[800],
      secondary: grey[700],
    },
    background: {
      paper: "#fff",
    },
  },
  typography: {
    fontFamily: ["Inter", '"Segoe UI Symbol"'].join(","),
    fontSize: 16,
    h1: {
      fontSize: "3rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "2rem",
      fontWeight: 400,
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 700,
    },
    h6: {
      fontSize: "1.5rem",
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: "1.125rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1.125rem",
      fontWeight: 500,
    },
    body2: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 700,
    },
    caption: {
      fontSize: "0.875rem",
      fontWeight: 500,
    },
    overline: {
      fontSize: "0.875rem",
      fontWeight: 500,
      textTransform: "none",
      lineHeight: "1.125rem",
    },
  },
};
const theme = createTheme(materialUiThemeLight);

theme.components = {
  MuiStepLabel: {
    styleOverrides: {
      label: {
        fontSize: "0.8rem",
        "&.Mui-active": {
          color: theme.palette.info.main,
        },
        "&.Mui-completed": {
          color: theme.palette.primary.main,
        },
      },
      labelContainer: {
        maxWidth: 110,
      },
      iconContainer: {
        fill: "#E8E8E4",
        width: 40,
        height: 40,
        zIndex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& .MuiStepIcon-active": {
          fill: theme.palette.info.main,
          "& .MuiStepIcon-text": {
            fill: theme.palette.primary.contrastText,
          },
        },
        "& .MuiStepIcon-completed": {
          fill: theme.palette.primary.main,
        },
        "& .MuiStepIcon-text": {
          fontSize: "0.7rem",
          fill: "#ADAFB1",
        },
      },
    },
  },

  MuiStepConnector: {
    styleOverrides: {
      root: {
        top: 20,
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontSize: theme.typography.body2.fontSize,
        fontWeight: theme.typography.body2.fontWeight as number,
        "&.Mui-disabled": {
          color: theme.palette.grey[400],
        },
        // "&.Mui-focused": {
        //   color: "unset",
        // },
        "& svg": {
          color: theme.palette.warning.main,
          fontSize: "16px",
          pointerEvents: "auto",
          cursor: "help",
        },
      },
      disabled: {
        color: theme.palette.grey[500],
      },
    },
  },

  MuiInputBase: {
    styleOverrides: {
      root: {
        "&.MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: theme.palette.grey[400],
          },
          borderColor: "unset",
          "&.Mui-disabled fieldset": {
            borderColor: theme.palette.grey[400],
          },
          "& input:focus": {
            border: "none",
            outline: "none",
            color: theme.palette.grey[500],
          },
        },
        "&.Mui-disabled": {
          backgroundColor: theme.palette.grey[100],
          color: theme.palette.grey[500],
        },
        "&.Mui-disabled input": {
          backgroundColor: theme.palette.grey[100],
        },
        "& textarea": {
          backgroundColor: "transparent",
        },
      },
      input: {
        color: theme.palette.text.secondary,
        fontSize: theme.typography.body2.fontSize,
        fontWeight: theme.typography.body2.fontWeight as number,
        backgroundColor: theme.palette.background.paper,
      },
    },
  },
};
export { theme };
