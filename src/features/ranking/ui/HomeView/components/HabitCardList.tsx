import { Habit } from "@features/ranking/domain/models/Habit";
import { FC, memo, useCallback } from "react";
import { FlatList, ListRenderItem } from "react-native";
import HabitCard from "./HabitCard";
import { atoms as a } from "@core/layout";

type Props = {
  habits: Habit[];
  onPressCard: (id: string) => void;
};

const HabitCardList: FC<Props> = ({ habits, onPressCard }) => {
  const handleRenderItem: ListRenderItem<Habit> = useCallback(
    ({ item }) => {
      return <HabitCard habit={item} onPress={onPressCard} />;
    },
    [onPressCard]
  );

  return (
    <FlatList
      contentContainerStyle={[a.mx_lg, a.gap_md, a.rounded_md]}
      data={habits}
      renderItem={handleRenderItem}
    />
  );
};
export default memo(HabitCardList);
export { Props as HabitCardListProps };
