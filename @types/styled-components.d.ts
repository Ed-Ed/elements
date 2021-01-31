import { Theme } from "../src/Theme/types";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
