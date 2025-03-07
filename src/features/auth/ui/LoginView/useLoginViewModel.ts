import { useNavigation } from "@react-navigation/native";

const useLoginViewModel = () => {
  const { navigate } = useNavigation();

  const handleOnSubmit = (email: string, password: string) => {
    console.log("TODO: handleOnSubmit", { email, password });
  };

  const handlePressSignUp = () => {
    navigate("SignUp");
  };

  return { handlePressSignUp, handleOnSubmit };
};

export { useLoginViewModel };
