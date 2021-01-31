export type Breakpoint = "mobile" | "tablet" | "desktop";

export type BreakpointKeys = {
  mobile: number;
  tablet: number;
  desktop: number;
};

type Breakpoints = BreakpointKeys & {
  up(key: Breakpoint): string;
};

type PaletteColors = {
  main: string;
  light: string;
  dark: string;
};

type Palette = {
  primary: PaletteColors;
  secondary: PaletteColors;
  text: {
    primary: string;
    secondary: string;
  };
  background: {
    default: string;
    paper: string;
  };
};

type BoxShadows = {
  button: string;
  standard: string;
  hover: string;
};

type TypographyProperties = {
  fontFamily: string;
  fontWeight: number;
  fontSize: string;
  lineHeight: number;
  letterSpacing: string;
};

type Typography = {
  h1: TypographyProperties;
  h2: TypographyProperties;
  h3: TypographyProperties;
  h4: TypographyProperties;
  h5: TypographyProperties;
  h6: TypographyProperties;
  body1: TypographyProperties;
  body2: TypographyProperties;
  button: TypographyProperties;
};

export type Theme = {
  breakpoints: Breakpoints;
  palette: Palette;
  boxShadows: BoxShadows;
  transition: string;
  typography: Typography;
};

export type ThemeOptions = {
  breakpoints?: Partial<BreakpointKeys>;
  palette?: {
    primary?: string;
    secondary?: string;
    text?: {
      primary?: string;
      secondary?: string;
    };
    background?: {
      default?: string;
      paper?: string;
    };
  };
  typography?: {
    fontFamily?: string;
  };
};
