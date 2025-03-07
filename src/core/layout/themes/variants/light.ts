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
    circular_button: {
      background: {
        primary: { backgroundColor: palette.primary },
        secondary: { backgroundColor: palette.dark },
      },
      icon: {
        primary: { color: palette.light },
        secondary: { color: palette.light },
      },
    },
    header: {
      background: {
        backgroundColor: palette.primary,
      },
    },
    icon: {
      primary: { color: palette.dark },
      primary_disabled: { color: `${palette.dark}60` },
    },
    bottom_bar: {
      background: {
        backgroundColor: palette.primary,
      },
    },
  },
};
