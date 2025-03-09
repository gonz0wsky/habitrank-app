import { atoms as a, useTheme } from "@core/layout";
import { ScreenComponent } from "@core/navigation/routes/params";
import { View } from "react-native";
import { useHomeViewModel } from "./useHomeViewModel";
import Header from "@shared/ui/component/Header";
import { useLingui } from "@lingui/react";
import { HabitCardList } from "./components/HabitCardList";

const HomeView: ScreenComponent<"Home"> = () => {
  const t = useTheme();
  const { i18n } = useLingui();

  const { joinedHabitsList } = useHomeViewModel();

  return (
    <View style={[a.flex_1, t.atoms.background.primary]}>
      <Header transparent title={i18n.t("Habits")} />
      <HabitCardList habits={joinedHabitsList} />
    </View>
  );
};

export { HomeView };
