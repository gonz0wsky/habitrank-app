import { useNavigation } from "@react-navigation/native";
import { useJoinedHabitsQuery } from "./useJoinedHabitsQuery";

const useHomeViewModel = () => {
  const { data } = useJoinedHabitsQuery();
  const { navigate } = useNavigation();

  const handleOnPressCard = (id: string) => {
    navigate("HabitDetail", { id });
  };

  return {
    joinedHabitsList: data,
    handleOnPressCard,
  };
};

export { useHomeViewModel };
