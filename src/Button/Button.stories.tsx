import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { withKnobs, boolean, select, text } from "@storybook/addon-knobs";

import { createTheme } from "../Theme";
import { Button, Color, Variant } from "./Button";

const colorOptions: Color[] = ["primary", "secondary"];
const variantOptions: Variant[] = ["contained", "outlined", "text"];

const Container = styled.div`
  * {
    margin: 16px;
  }
`;

export default { title: "Button", decorators: [withKnobs] };

export const Default = () => (
  <ThemeProvider theme={createTheme()}>
    <Container>
      <Button
        disabled={boolean("Disabled", false)}
        square={boolean("Square", false)}
        color={select("Color", colorOptions, undefined)}
        variant={select("Variant", variantOptions, undefined)}
      >
        {text("Text", "A Button")}
      </Button>
    </Container>
  </ThemeProvider>
);
