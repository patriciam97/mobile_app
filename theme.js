import { DarkTheme } from "react-native-paper";
export const theme = {
  ...DarkTheme,
  roundness: 2,
  colors: {
    ...DarkTheme.colors,
    primary: "#191919",
    indianRed: "#D05353",
  },
  mode: "exact",
};
