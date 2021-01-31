import React from "react";
import styled, { CSSObject } from "styled-components";

import { filterProps } from "../utils/filterProps";
import { Breakpoint } from "../Theme/types";

type Props = React.HTMLAttributes<HTMLElement> & {
  square?: boolean;
  breakpoint?: Breakpoint;
};

const PaperBase = styled(({ children, ...props }: Props) => {
  return React.createElement(
    "div",
    filterProps(props, ["square", "breakpoint"]),
    children
  );
})(({ theme, ...props }) => {
  const isSquare = !!props.square;

  const styles: CSSObject = {
    borderRadius: isSquare ? 0 : "8px",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.boxShadows.standard
  };

  if (props.breakpoint) {
    return {
      [theme.breakpoints.up(props.breakpoint)]: {
        ...styles
      }
    };
  }

  return styles;
});

const Paper: React.FC<Props> = ({ children, ...props }) => {
  return <PaperBase {...props}>{children}</PaperBase>;
};

export { Paper };
