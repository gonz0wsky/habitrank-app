import { RouteProp } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { FC } from "react";

export type MainNavigatorParamList = {
  Detail: undefined;
  Login: undefined;
  Tabs: undefined;
};

export type TabNavigatorParamList = {
  Home: undefined;
  Profile: undefined;
};

export type AllNavigatorParamList = MainNavigatorParamList &
  TabNavigatorParamList;

export type ScreenName = keyof AllNavigatorParamList;

export type ScreenComponent<S extends ScreenName> = FC<
  NativeStackScreenProps<AllNavigatorParamList, S>
>;

export type ScreenRoute<S extends ScreenName> = FC<
  RouteProp<AllNavigatorParamList, S>
>;
