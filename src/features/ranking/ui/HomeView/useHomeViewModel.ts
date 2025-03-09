import { useJoinedHabitsQuery } from "./useJoinedHabitsQuery";

const useHomeViewModel = () => {
  const { data } = useJoinedHabitsQuery();

  return {
    joinedHabitsList: data,
  };
};

export { useHomeViewModel };
