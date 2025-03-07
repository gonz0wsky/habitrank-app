const useLoginViewModel = () => {
  const handleOnSubmit = (email: string, password: string) => {
    console.log("TODO: handleOnSubmit", { email, password });
  };

  const handlePressSignUp = () => {
    console.log("TODO: handlePressSignUp");
  };

  return { handlePressSignUp, handleOnSubmit };
};

export { useLoginViewModel };
