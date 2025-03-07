import { atoms as a } from "@core/layout";
import { useLingui } from "@lingui/react";
import { Button } from "@shared/ui/component/Button";
import { FC, memo, useCallback, useRef } from "react";
import { useForm } from "react-hook-form";
import { TextInput as RNTextInput, View } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { emailSchema, passwordSchema } from "@shared/validations";
import FormTextInput from "@shared/ui/component/FormTextInput";

type Props = {
  onSubmit: (email: string, password: string) => void;
  isLoading?: boolean;
};

const LoginForm: FC<Props> = ({ onSubmit, isLoading }) => {
  const { i18n } = useLingui();

  const passwordInputRef = useRef<RNTextInput>(null);

  const { control, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>({
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(
      z.object({ email: emailSchema, password: passwordSchema })
    ),
  });

  const onPressSubmit = useCallback(() => {
    handleSubmit(({ email, password }) => {
      onSubmit(email, password);
    })();
  }, [handleSubmit, onSubmit]);

  return (
    <View>
      <View style={[a.gap_lg, a.mb_5xl]}>
        <FormTextInput
          control={control}
          name="email"
          testID="email"
          type="email"
          label={i18n.t("Email")}
          overrideTextInputProps={{
            returnKeyType: "next",
            onSubmitEditing: () => {
              passwordInputRef.current?.focus();
            },
          }}
        />
        <FormTextInput
          control={control}
          name="password"
          testID="password"
          inputRef={passwordInputRef}
          type="password"
          label={i18n.t("Password")}
          overrideTextInputProps={{
            returnKeyType: "done",
            onSubmitEditing: () => {
              onPressSubmit();
            },
          }}
        />
      </View>
      <Button
        text={i18n.t("Login")}
        loading={isLoading}
        onPress={onPressSubmit}
      />
    </View>
  );
};

export default memo(LoginForm);
export { Props as LoginFormProps };
