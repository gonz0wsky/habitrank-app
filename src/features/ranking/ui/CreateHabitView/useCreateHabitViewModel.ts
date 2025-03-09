import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";

const useCreateHabitViewModel = () => {
  const { canGoBack, goBack } = useNavigation();

  const handleOnPressBack = useCallback(() => {
    canGoBack() && goBack();
  }, [canGoBack, goBack]);

  return { handleOnPressBack };
};

export { useCreateHabitViewModel };
