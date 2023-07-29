import { StyleProp, TextStyle } from "react-native";
import { typography } from "./typography";

export const titlestyle: StyleProp<TextStyle> = {
  fontSize: typography.xxlarge,
  fontFamily: "oxygenBold",
};

export const margin = {
  sm: 5,
  md: 10,
  lg: 20,
  xl: 30,
};
