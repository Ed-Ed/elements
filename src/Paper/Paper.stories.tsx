import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { createTheme } from "../Theme";
import { Paper } from "./Paper";
import { Typography } from "../Typography";

const StyledPaper = styled(Paper)`
  width: 100%;
  height: 300px;
  padding: 16px;
  margin: 16px;
`;

export default { title: "Paper" };

export const Default = () => (
  <ThemeProvider theme={createTheme()}>
    <StyledPaper>
      <Typography>Default paper with dimensions</Typography>
    </StyledPaper>
    <StyledPaper square>
      <Typography>Square paper with dimensions</Typography>
    </StyledPaper>
    <StyledPaper breakpoint="tablet">
      <Typography>
        Paper with breakpoint=tablet (paper should not appear on devices smaller
        than tablet)
      </Typography>
    </StyledPaper>
  </ThemeProvider>
);
