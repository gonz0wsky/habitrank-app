import { ScreenName } from "./params";

export const paths: Record<ScreenName, string> = {
  Welcome: "/",
  Detail: "/detail",
  Home: "/home",
  Profile: "/profile",
  Tabs: "/tabs",
} as const;
