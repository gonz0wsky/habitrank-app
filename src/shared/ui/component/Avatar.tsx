import { atoms as a, useTheme } from "@core/layout";
import { memo } from "react";
import { StyleProp, Text, View, ViewProps } from "react-native";

type AvatarProps = {
  text: string;
  size?: number;
  color?: string;
  style?: StyleProp<ViewProps>;
};

const Avatar: React.FC<AvatarProps> = ({ text, size = 32, color, style }) => {
  const t = useTheme();
  return (
    <View
      style={[
        style,
        a.rounded_xs,
        a.align_center,
        a.justify_center,
        {
          backgroundColor: color ?? t.palette.alt,
          height: size,
          width: size,
        },
      ]}
    >
      <Text style={[a.font_medium, t.atoms.text.primary]}>
        {text.charAt(0).toLowerCase()}
      </Text>
    </View>
  );
};

export default memo(Avatar);
