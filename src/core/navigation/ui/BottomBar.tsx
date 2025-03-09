import { atoms as a, useSafeArea, useTheme } from "@core/layout/index";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React, { FC, useCallback } from "react";
import { Pressable, View } from "react-native";
import { TabNavigatorParamList } from "../routes/params";
import Icon from "@shared/ui/component/Icon";
import type { IconName } from "@shared/ui/component/Icon/types";
import CircularButton from "@shared/ui/component/CircularButton";

type TabScreen = keyof TabNavigatorParamList;

const icon: Record<TabScreen, IconName> = {
  Home: "home",
  Profile: "user",
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
        <Pressable
          key={route.key}
          testID={`bottom-tab-${index}`}
          onPress={onPress}
          style={[a.flex_1]}
        >
          <View style={[a.align_center]}>
            <Icon
              name={icon[screen]}
              color={
                selected
                  ? t.atoms.icon.primary.color
                  : t.atoms.icon.primary_disabled.color
              }
              size={32}
            />
          </View>
        </Pressable>
      );
    },
    [
      state.index,
      t.atoms.icon.primary.color,
      t.atoms.icon.primary_disabled.color,
      navigation,
    ]
  );

  const handleOnPressAdd = () => {
    navigation.navigate("CreateHabit");
  };

  return (
    <View
      style={[
        a.flex_row,
        t.atoms.bottom_bar.background,
        a.align_center,
        a.pt_lg,
        a.pb_safe(safe.bottom, a.pb_lg.paddingBottom),
      ]}
    >
      {Tab(state.routes[0], 0)}
      <CircularButton
        icon="plus"
        variant="secondary"
        size={48}
        onPress={handleOnPressAdd}
      />
      {Tab(state.routes[1], 1)}
    </View>
  );
};
