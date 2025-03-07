import { useNavigation } from "@react-navigation/native";

const useSignUpViewModel = () => {
  const { canGoBack, goBack } = useNavigation();

  const handleOnSubmit = (email: string, password: string) => {
    console.log("TODO: handleOnSubmit", { email, password });
  };

  const handlePressGoBack = () => {
    canGoBack() && goBack();
  };

  return { handleOnSubmit, handlePressGoBack };
};

export { useSignUpViewModel };
