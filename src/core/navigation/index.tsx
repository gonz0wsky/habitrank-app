import React, { useCallback } from "react";
import type { LinkingOptions } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";

import { paths } from "./routes/paths";
import type {
  AllNavigatorParamList,
  MainNavigatorParamList,
  TabNavigatorParamList,
} from "./routes/params";
import { BottomBar } from "./ui/BottomBar";

import { HomeView } from "@features/ranking/HomeView/HomeView";
import { ProfileView } from "@features/profile/ui/ProfileView/ProfileView";
import { LoginView } from "@features/auth/ui/LoginView/LoginView";
import { DetailView } from "@features/ranking/DetailView/DetailView";
import { SignUpView } from "@features/auth/ui/SignUp/SignUpView";

const TABS_SCREEN_OPTIONS: BottomTabNavigationOptions = {
  headerShown: false,
  animation: "shift",
} as const;

const MAIN_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
  animation: "ios_from_right",
} as const;

const MODAL_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  animation: "slide_from_bottom",
  // presentation: "modal",
} as const;

const Tab = createBottomTabNavigator<TabNavigatorParamList>();
const Main = createNativeStackNavigator<MainNavigatorParamList>();

const TabNavigator = () => {
  const tabBar = useCallback(
    (props: BottomTabBarProps) => <BottomBar {...props} />,
    []
  );

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={TABS_SCREEN_OPTIONS}
      tabBar={tabBar}
    >
      <Tab.Screen name="Home" component={HomeView} />
      <Tab.Screen name="Profile" component={ProfileView} />
    </Tab.Navigator>
  );
};

const MainNavigatorPublicScreens = () => (
  <Main.Group>
    <Main.Screen name="Login" component={LoginView} />
    <Main.Screen name="SignUp" component={SignUpView} />
  </Main.Group>
);

const MainNavigatorPrivateScreens = () => (
  <Main.Group>
    <Main.Screen name="Tabs" component={TabNavigator} />

    <Main.Group screenOptions={MODAL_SCREEN_OPTIONS}>
      <Main.Screen name="Detail" component={DetailView} />
    </Main.Group>
  </Main.Group>
);

const linking: LinkingOptions<AllNavigatorParamList> = {
  prefixes: [],
  config: {
    screens: paths,
  },
} as const;

const Navigator = () => {
  const isLogged = false;
  return (
    <NavigationContainer linking={linking}>
      <Main.Navigator
        initialRouteName={isLogged ? "Tabs" : "Login"}
        screenOptions={MAIN_SCREEN_OPTIONS}
      >
        {isLogged
          ? MainNavigatorPrivateScreens()
          : MainNavigatorPublicScreens()}
      </Main.Navigator>
    </NavigationContainer>
  );
};

export { Navigator };
