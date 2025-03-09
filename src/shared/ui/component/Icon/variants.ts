import type { FC } from "react";

import Close from "./icons/Close";
import Home from "./icons/Home";
import LeftArrow from "./icons/LeftArrow";
import Plus from "./icons/Plus";
import User from "./icons/User";

import type { IconProps } from "./types";

const createSvgIcons = <T extends { [name: string]: FC<IconProps> }>(
  cfg: T
): Record<keyof T, FC<IconProps>> => cfg;

export const icons = createSvgIcons({
  close: Close,
  home: Home,
  left_arrow: LeftArrow,
  plus: Plus,
  user: User,
});
