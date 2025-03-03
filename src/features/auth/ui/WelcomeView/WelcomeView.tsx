import { atoms as a, useTheme } from "@core/layout";
import { ScreenComponent } from "@core/navigation/routes/params";
import { SafeAreaView, Text } from "react-native";

const WelcomeView: ScreenComponent<"Welcome"> = () => {
  const t = useTheme();

  return (
    <SafeAreaView
      style={[
        a.flex_1,
        t.atoms.background.primary,
        a.justify_center,
        a.align_center,
      ]}
    >
      <Text>Hello</Text>
    </SafeAreaView>
  );
};

export { WelcomeView };
