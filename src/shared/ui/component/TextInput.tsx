import { atoms as a, useTheme } from "@core/layout";
import { FC, memo } from "react";
import { TextInput as RNTextInput, Text, View } from "react-native";
import type { StyleProp, ViewStyle } from "react-native";

type Props = {
  error?: string;
  inputRef?: React.Ref<RNTextInput>;
  label?: string;
  overrideTextInputProps?: RNTextInput["props"];
  style?: StyleProp<ViewStyle>;
  testID?: string;
  type: "text" | "password" | "email";
};

const inputProps: Record<NonNullable<Props["type"]>, RNTextInput["props"]> = {
  email: { keyboardType: "email-address" },
  password: { secureTextEntry: true },
  text: {},
} as const;

const TextInput: FC<Props> = ({
  error,
  inputRef,
  label,
  overrideTextInputProps,
  style,
  testID,
  type,
}) => {
  const t = useTheme();

  return (
    <View style={[style]}>
      {label && (
        <Text
          testID={`${testID}-label`}
          style={[a.font_semibold, t.atoms.text.alt, a.ml_sm, a.mb_sm]}
        >
          {label}
        </Text>
      )}
      <RNTextInput
        testID={`${testID}-input`}
        ref={inputRef}
        selectionColor={t.atoms.text_input.primary.borderColor}
        style={[
          a.border,
          a.px_md,
          a.py_md,
          a.rounded_sm,
          t.atoms.text_input.primary,
        ]}
        {...inputProps[type]}
        {...overrideTextInputProps}
      />
      {error && (
        <Text testID={`${testID}-error`} style={[t.atoms.text.error, a.mt_xs]}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default memo(TextInput);
export type { Props as TextInputProps };
