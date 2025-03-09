import { atoms as a, useTheme } from "@core/layout";
import { ScreenComponent } from "@core/navigation/routes/params";
import { Text, View } from "react-native";
import { useHabitDetailViewModel } from "./useHabitDetailViewModel";
import Header from "@shared/ui/component/Header";

const HabitDetailView: ScreenComponent<"HabitDetail"> = () => {
  const t = useTheme();

  const { handleOnPressBack } = useHabitDetailViewModel();

  return (
    <View style={[a.flex_1, t.atoms.background.primary]}>
      <Header leftIcon="left_arrow" onPressLeft={handleOnPressBack} />
      <Text>Detail</Text>
    </View>
  );
};

export { HabitDetailView };
