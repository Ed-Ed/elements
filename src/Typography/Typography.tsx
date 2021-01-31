import React from "react";
import styled, { CSSObject } from "styled-components";

import { filterProps } from "../utils/filterProps";
import { Theme } from "../Theme/types";

type Component = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
type Variant = Exclude<Component, "p" | "span"> | "body1" | "body2" | "button";
type Color = "primary" | "secondary" | "textPrimary" | "textSecondary";
type Alignment =
  | "left"
  | "center"
  | "right"
  | "justify"
  | "initial"
  | "inherit";

const getColor = (theme: Theme, color: Color): string => {
  switch (color) {
    case "primary":
      return theme.palette.primary.main;
    case "secondary":
      return theme.palette.secondary.main;
    case "textPrimary":
      return theme.palette.text.primary;
    case "textSecondary":
      return theme.palette.text.secondary;
    default:
      return theme.palette.text.primary;
  }
};

/**
 * Returns a bigger font size for devices which aren't mobile
 */
const getFontSizeAdjustment = (theme: Theme, variant: Variant): CSSObject => {
  let fontSize: undefined | string;

  switch (variant) {
    case "h1":
      fontSize = "6rem";
      break;
    case "h2":
      fontSize = "4rem";
      break;
  }

  if (fontSize) {
    return {
      [theme.breakpoints.up("mobile")]: {
        fontSize
      }
    };
  }

  return {};
};

type Props = React.HTMLAttributes<HTMLElement> & {
  component?: Component;
  variant?: Variant;
  color?: Color;
  gutterBottom?: boolean;
  align?: Alignment;
};

const TypographyBase = styled(
  ({ component = "p", children, ...props }: Props) => {
    return React.createElement(
      component,
      filterProps(props, [
        "component",
        "align",
        "variant",
        "color",
        "gutterBottom"
      ]),
      children
    );
  }
)(({ theme, ...props }) => {
  const variant = props.variant || "body1";
  const color = getColor(theme, props.color);
  const align = props.align || "inherit";

  const styles: CSSObject = {
    margin: props.gutterBottom ? "0 0 16px 0" : "0",
    ...theme.typography[variant],
    color: color,
    textAlign: align,
    ...getFontSizeAdjustment(theme, props.variant)
  };

  return styles;
});

const Typography: React.FC<Props> = props => <TypographyBase {...props} />;

export { Typography };
