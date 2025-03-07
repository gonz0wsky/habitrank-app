import { atoms as a, useTheme } from "@core/layout";
import type { FC } from "react";
import { StyleProp, Text, ViewStyle } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

type Props = {
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  text: string;
  variant?: "primary";
} & Omit<RectButtonProps, "children">;

const Button: FC<Props> = ({
  text,
  variant = "primary",
  style,
  loading,
  testID,
  ...rest
}) => {
  const t = useTheme();

  return (
    <RectButton
      testID={testID}
      style={[
        style,
        a.align_center,
        a.justify_center,
        a.py_md,
        a.rounded_sm,
        t.atoms.button.bg[variant],
      ]}
      enabled={!loading}
      {...rest}
    >
      <Text style={[t.atoms.button.text[variant], a.font_medium]}>{text}</Text>
    </RectButton>
  );
};

export { Button, Props as ButtonProps };
