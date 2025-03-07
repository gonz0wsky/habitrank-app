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
import { nicknameSchema } from "@shared/validations/nickname";

type Props = {
  onSubmit: (name: string, email: string, password: string) => void;
  isLoading?: boolean;
};

const SignUpForm: FC<Props> = ({ onSubmit, isLoading }) => {
  const { i18n } = useLingui();

  const emailInputRef = useRef<RNTextInput>(null);
  const passwordInputRef = useRef<RNTextInput>(null);

  const { control, handleSubmit } = useForm<{
    nickname: string;
    email: string;
    password: string;
  }>({
    mode: "onSubmit",
    defaultValues: {
      nickname: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(
      z.object({
        nickname: nicknameSchema,
        email: emailSchema,
        password: passwordSchema,
      })
    ),
  });

  const onPressSubmit = useCallback(() => {
    handleSubmit(({ nickname, email, password }) => {
      onSubmit(nickname, email, password);
    })();
  }, [handleSubmit, onSubmit]);

  return (
    <View>
      <View style={[a.gap_lg, a.mb_5xl]}>
        <FormTextInput
          control={control}
          label={i18n.t("Nickname")}
          name="nickname"
          testID="nickname"
          type="text"
          overrideTextInputProps={{
            returnKeyType: "next",
            onSubmitEditing: () => {
              emailInputRef.current?.focus();
            },
          }}
        />
        <FormTextInput
          control={control}
          inputRef={emailInputRef}
          label={i18n.t("Email")}
          name="email"
          testID="email"
          type="email"
          overrideTextInputProps={{
            returnKeyType: "next",
            onSubmitEditing: () => {
              passwordInputRef.current?.focus();
            },
          }}
        />
        <FormTextInput
          control={control}
          inputRef={passwordInputRef}
          label={i18n.t("Password")}
          name="password"
          testID="password"
          type="password"
          overrideTextInputProps={{
            returnKeyType: "done",
            onSubmitEditing: () => {
              onPressSubmit();
            },
          }}
        />
      </View>
      <Button
        text={i18n.t("Sign Up")}
        loading={isLoading}
        onPress={onPressSubmit}
      />
    </View>
  );
};

export default memo(SignUpForm);
export { Props as SignUpFormProps };
