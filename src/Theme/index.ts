import { lighten, darken } from "./utils";
import { BreakpointKeys, Breakpoint, Theme, ThemeOptions } from "./types";

const defaultThemeOptions = {
  breakpoints: {
    mobile: 414,
    tablet: 768,
    desktop: 1024
  },
  palette: {
    primary: "#0074D9",
    secondary: "#000",
    text: {
      primary: "#111",
      secondary: "#FFF"
    },
    background: {
      default: "#1c1c1c",
      paper: "#FFF"
    }
  },
  typography: {
    fontFamily:
      "Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif"
  }
};

const createTheme = (themeOptions?: ThemeOptions): Theme => {
  const breakpointValues: BreakpointKeys = Object.assign(
    { ...defaultThemeOptions.breakpoints },
    themeOptions?.breakpoints || {}
  );

  const palettePrimary =
    themeOptions?.palette?.primary || defaultThemeOptions.palette.primary;
  const paletteSecondary =
    themeOptions?.palette?.secondary || defaultThemeOptions.palette.secondary;
  const textPrimary =
    themeOptions?.palette?.text?.primary ||
    defaultThemeOptions.palette.text.primary;
  const textSecondary =
    themeOptions?.palette?.text?.secondary ||
    defaultThemeOptions.palette.text.secondary;
  const backgroundDefault =
    themeOptions?.palette?.background?.default ||
    defaultThemeOptions.palette.background.default;
  const backgroundPaper =
    themeOptions?.palette?.background?.paper ||
    defaultThemeOptions.palette.background.paper;
  const typographyFontFamily =
    themeOptions?.typography?.fontFamily ||
    defaultThemeOptions.typography.fontFamily;

  const theme: Theme = {
    breakpoints: {
      up: (key: Breakpoint): string => {
        return `@media (min-width: ${breakpointValues[key]}px)`;
      },
      ...breakpointValues
    },
    palette: {
      primary: {
        main: palettePrimary,
        light: lighten(palettePrimary, 0.2),
        dark: darken(palettePrimary, 0.2)
      },
      secondary: {
        main: paletteSecondary,
        light: lighten(paletteSecondary, 0.2),
        dark: darken(paletteSecondary, 0.2)
      },
      text: {
        primary: textPrimary,
        secondary: textSecondary
      },
      background: {
        default: backgroundDefault,
        paper: backgroundPaper
      }
    },
    boxShadows: {
      button:
        "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
      standard: "0px 10px 26px rgba(0,0,0,0.06)",
      hover: "0px 10px 26px rgba(0,0,0,0.12)"
    },
    transition: "0.2s",
    typography: {
      h1: {
        fontFamily: typographyFontFamily,
        fontWeight: 400,
        fontSize: "4rem",
        lineHeight: 1.2,
        letterSpacing: "-0.01562em"
      },
      h2: {
        fontFamily: typographyFontFamily,
        fontWeight: 400,
        fontSize: "3.5rem",
        lineHeight: 1.2,
        letterSpacing: "-0.00833em"
      },
      h3: {
        fontFamily: typographyFontFamily,
        fontWeight: 400,
        fontSize: "3rem",
        lineHeight: 1.2,
        letterSpacing: "0em"
      },
      h4: {
        fontFamily: typographyFontFamily,
        fontWeight: 400,
        fontSize: "2rem",
        lineHeight: 1.235,
        letterSpacing: "0.00735em"
      },
      h5: {
        fontFamily: typographyFontFamily,
        fontWeight: 400,
        fontSize: "1.5rem",
        lineHeight: 1.334,
        letterSpacing: "0em"
      },
      h6: {
        fontFamily: typographyFontFamily,
        fontWeight: 400,
        fontSize: "1.25rem",
        lineHeight: 1.6,
        letterSpacing: "0.0075em"
      },
      body1: {
        fontFamily: typographyFontFamily,
        fontWeight: 400,
        fontSize: "1rem",
        lineHeight: 1.65,
        letterSpacing: "normal"
      },
      body2: {
        fontFamily: typographyFontFamily,
        fontWeight: 300,
        fontSize: "1rem",
        lineHeight: 1.5,
        letterSpacing: "0.00938em"
      },
      button: {
        fontFamily: typographyFontFamily,
        fontWeight: 500,
        fontSize: "0.9rem",
        lineHeight: 1,
        letterSpacing: "0em"
      }
    }
  };

  return theme;
};

const defaultTheme = createTheme();

export { defaultTheme, createTheme };
