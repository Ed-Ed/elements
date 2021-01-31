import React from "react";
import styled, { CSSObject } from "styled-components";

import { filterProps } from "../utils/filterProps";

type Variant = "contained" | "outlined" | "text";
type Color = "primary" | "secondary";

type Props = React.ButtonHTMLAttributes<HTMLElement> & {
  variant?: Variant;
  color?: Color;
  square?: boolean;
};

const ButtonBase = styled(({ children, ...props }: Props) => {
  return React.createElement(
    "button",
    filterProps(props, ["variant", "color", "square"]),
    children
  );
})(({ theme, ...props }) => {
  // TODO
  // const variant: Variant = props.variant || "contained";
  const color: Color = props.color || "primary";
  const isRounded = !props.square;
  const isDisabled = !!props.disabled;

  const styles: CSSObject = {
    height: "48px",
    padding: "0 24px",
    border: "none",
    borderRadius: isRounded ? "8px" : "0",
    // TODO disabled
    backgroundColor: !isDisabled ? theme.palette[color].light : "inherit",
    outline: "none",
    boxShadow: theme.boxShadows.button,
    display: "block",
    color: theme.palette.text[color],
    cursor: "pointer",
    textTransform: "uppercase",
    ...theme.typography.button,
    "&:hover": {
      backgroundColor: !isDisabled ? theme.palette[color].main : "inherit"
    },
    "&:active": {
      backgroundColor: !isDisabled ? theme.palette[color].dark : "inherit"
    }
  };

  return styles;
});

const Button: React.FC<Props> = props => <ButtonBase {...props} />;

export { Button, Variant, Color };
