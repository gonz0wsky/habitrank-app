import { atoms as a, useSafeArea, useTheme } from "@core/layout/index";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React, { FC, useCallback } from "react";
import { View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { TabNavigatorParamList } from "../routes/params";
import Icon from "@shared/ui/component/Icon";
import type { IconName } from "@shared/ui/component/Icon/types";

type TabScreen = keyof TabNavigatorParamList;

const icon: Record<TabScreen, IconName> = {
  Home: "plus",
  Profile: "plus",
} as const;

export const BottomBar: FC<BottomTabBarProps> = ({ navigation, state }) => {
  const t = useTheme();
  const safe = useSafeArea();

  const Tab = useCallback(
    (route: BottomTabBarProps["state"]["routes"][0], index: number) => {
      const screen = route.name as TabScreen;
      const selected = state.index === index;

      const onPress = () => {
        navigation.navigate(route.name);
      };

      return (
        <RectButton
          key={route.key}
          testID={`bottom-tab-${index}`}
          onPress={onPress}
          style={[
            a.pb_safe(safe.bottom, a.pb_lg.paddingBottom),
            a.pt_lg,
            a.flex_1,
            a.align_center,
          ]}
        >
          <View style={[a.align_center]}>
            <Icon name={icon[screen]} color={"black"} size={32} />
          </View>
        </RectButton>
      );
    },
    [state.index, navigation, safe.bottom]
  );

  return (
    <View style={[a.flex_row, a.border_t_sm]}>{state.routes.map(Tab)}</View>
  );
};
