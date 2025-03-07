import { tokens } from "@core/layout/utils/getActiveBreakpoints";

export const palette = {
  light: tokens.color.theme_light_light,
  dark: tokens.color.theme_light_dark,
  primary: tokens.color.theme_light_primary,
  secondary: tokens.color.theme_light_secondary,
  alt: tokens.color.theme_light_alt,
  error: tokens.color.theme_light_error,
} as const;

export const theme = {
  name: "light",
  palette,
  atoms: {
    text: {
      primary: { color: palette.dark },
      secondary: { color: palette.light },
      alt: { color: palette.primary },
      error: { color: palette.error },
    },
    background: {
      primary: { backgroundColor: palette.light },
      secondary: { backgroundColor: palette.dark },
    },
    button: {
      bg: {
        primary: { backgroundColor: palette.primary },
      },
      text: {
        primary: { color: palette.light },
      },
    },
    text_input: {
      primary: {
        color: palette.dark,
        borderColor: palette.primary,
        backgroundColor: `${palette.alt}30`,
      },
    },
  },
};
