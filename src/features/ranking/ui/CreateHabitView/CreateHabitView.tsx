import { atoms as a, useTheme } from "@core/layout";
import { ScreenComponent } from "@core/navigation/routes/params";
import { Text, View } from "react-native";
import { useCreateHabitViewModel } from "./useCreateHabitViewModel";
import Header from "@shared/ui/component/Header";

const CreateHabitView: ScreenComponent<"CreateHabit"> = () => {
  const t = useTheme();

  const { handleOnPressBack } = useCreateHabitViewModel();

  return (
    <View style={[a.flex_1, t.atoms.background.primary]}>
      <Header leftIcon="close" onPressLeft={handleOnPressBack} />
      <Text>Hello</Text>
    </View>
  );
};

export { CreateHabitView };
