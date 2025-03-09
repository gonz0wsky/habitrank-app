import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";

const useHabitDetailViewModel = () => {
  const { canGoBack, goBack } = useNavigation();

  const handleOnPressBack = useCallback(() => {
    if (canGoBack()) {
      goBack();
    }
  }, [canGoBack, goBack]);

  return { handleOnPressBack };
};

export { useHabitDetailViewModel };
