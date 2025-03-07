import { atoms as a, useSafeArea, useTheme } from "@core/layout";
import { ScreenComponent } from "@core/navigation/routes/params";
import { KeyboardAvoidingView, View } from "react-native";
import { useLingui } from "@lingui/react";

import SignUpForm from "./components/SignUpForm";
import { useSignUpViewModel } from "./useSignUpViewModel";
import Header from "@shared/ui/component/Header";

const SignUpView: ScreenComponent<"SignUp"> = () => {
  const t = useTheme();
  const { i18n } = useLingui();
  const safe = useSafeArea();

  const { handleOnSubmit, handlePressGoBack } = useSignUpViewModel();

  return (
    <View
      style={[a.flex_1, t.atoms.background.primary, a.pb_safe(safe.bottom, 20)]}
    >
      <Header
        title={i18n.t("Create an account")}
        leftIcon="left_arrow"
        onPressLeft={handlePressGoBack}
      />
      <KeyboardAvoidingView
        style={[a.mt_auto, a.mx_5xl, a.mb_5xl]}
        behavior="position"
      >
        <SignUpForm onSubmit={handleOnSubmit} />
      </KeyboardAvoidingView>
    </View>
  );
};

export { SignUpView };
