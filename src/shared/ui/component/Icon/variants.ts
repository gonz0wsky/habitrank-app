import type { FC } from "react";

import Plus from "./icons/Plus";
import LeftArrow from "./icons/LeftArrow";
import Home from "./icons/Home";
import User from "./icons/User";

import type { IconProps } from "./types";

const createSvgIcons = <T extends { [name: string]: FC<IconProps> }>(
  cfg: T
): Record<keyof T, FC<IconProps>> => cfg;

export const icons = createSvgIcons({
  plus: Plus,
  left_arrow: LeftArrow,
  home: Home,
  user: User,
});
