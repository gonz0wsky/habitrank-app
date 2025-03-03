import { useFonts as useExpoFonts } from "expo-font";

export const useFonts = () =>
  useExpoFonts({
    "HostGrotesk-Black": require("@assets/fonts/HostGrotesk-Black.otf"),
    "HostGrotesk-BlackItalic": require("@assets/fonts/HostGrotesk-BlackItalic.otf"),
    "HostGrotesk-Bold": require("@assets/fonts/HostGrotesk-Bold.otf"),
    "HostGrotesk-BoldItalic": require("@assets/fonts/HostGrotesk-BoldItalic.otf"),
    "HostGrotesk-Italic": require("@assets/fonts/HostGrotesk-Italic.otf"),
    "HostGrotesk-Light": require("@assets/fonts/HostGrotesk-Light.otf"),
    "HostGrotesk-LightItalic": require("@assets/fonts/HostGrotesk-LightItalic.otf"),
    "HostGrotesk-Medium": require("@assets/fonts/HostGrotesk-Medium.otf"),
    "HostGrotesk-MediumItalic": require("@assets/fonts/HostGrotesk-MediumItalic.otf"),
    "HostGrotesk-Regular": require("@assets/fonts/HostGrotesk-Regular.otf"),
  });
