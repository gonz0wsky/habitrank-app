import { tokens } from "@core/layout/utils/getActiveBreakpoints";

export const palette = {
  black: tokens.color.theme_light_black,
  blue: tokens.color.theme_light_blue,
  grey: tokens.color.theme_light_grey,
  white: tokens.color.theme_light_white,
} as const;

export const theme = {
  name: "light",
  atoms: {
    text: {
      primary: { color: palette.black },
      secondary: { color: palette.white },
      tertiary: { color: palette.blue },
    },
    background: {
      primary: { backgroundColor: palette.white },
      secondary: { backgroundColor: palette.blue },
      tertiary: { backgroundColor: palette.grey },
    },
  },
};
