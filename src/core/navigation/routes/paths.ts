import { ScreenName } from "./params";

export const paths: Record<ScreenName, string> = {
  Login: "/",
  Detail: "/detail",
  Home: "/home",
  Profile: "/profile",
  Tabs: "/tabs",
} as const;
