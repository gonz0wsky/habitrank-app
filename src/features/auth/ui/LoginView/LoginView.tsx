import { atoms as a, useTheme } from "@core/layout";
import { ScreenComponent } from "@core/navigation/routes/params";
import { KeyboardAvoidingView, SafeAreaView, Text, View } from "react-native";
import LoginForm from "./components/LoginForm";
import { useLingui } from "@lingui/react";
import { useLoginViewModel } from "./useLoginViewModel";

const LoginView: ScreenComponent<"Login"> = () => {
  const t = useTheme();
  const { i18n } = useLingui();

  const { handleOnSubmit, handlePressSignUp } = useLoginViewModel();

  return (
    <SafeAreaView style={[a.flex_1, t.atoms.background.primary]}>
      <KeyboardAvoidingView
        style={[a.mt_auto, a.mx_5xl, a.mb_5xl]}
        behavior="position"
      >
        <LoginForm onSubmit={handleOnSubmit} />
        <View style={[a.flex_row, a.mt_sm]}>
          <Text style={[a.font_regular, t.atoms.text.primary]}>
            {i18n.t("Don't have an account?")}
          </Text>
          <Text
            style={[a.font_regular, a.ml_xs, t.atoms.text.alt]}
            onPress={handlePressSignUp}
          >
            {i18n.t("Sign up")}
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export { LoginView };
