import "@emotion/react";
import { ThemeProps } from "./models/theme";

declare module "@emotion/react" {
  export interface Theme extends ThemeProps {}
}
