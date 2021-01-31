import React from "react";
import { ThemeProvider } from "styled-components";

import { createTheme } from "../Theme";
import { Typography } from "./Typography";

export default { title: "Typography" };

export const Default = () => (
  <ThemeProvider theme={createTheme()}>
    <Typography variant="body1">Body 1 - Lorem ipsum</Typography>
    <Typography variant="body2">Body 2 - Lorem ipsum</Typography>
    <Typography variant="h6">h6 - Lorem ipsum</Typography>
    <Typography variant="h5">h5 - Lorem ipsum</Typography>
    <Typography variant="h4">h4 - Lorem ipsum</Typography>
    <Typography variant="h3">h3 - Lorem ipsum</Typography>
    <Typography variant="h2">h2 - Lorem ipsum</Typography>
    <Typography variant="h1">h1 - Lorem ipsum</Typography>
  </ThemeProvider>
);

export const Align = () => (
  <ThemeProvider theme={createTheme()}>
    <Typography align="left">Left</Typography>
    <Typography align="center">Center</Typography>
    <Typography align="right">Right</Typography>
    <Typography align="inherit">Inherit</Typography>
    <Typography align="initial">Initial</Typography>
    <Typography align="justify">Justify</Typography>
  </ThemeProvider>
);
