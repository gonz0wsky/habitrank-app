import { FC, memo } from "react";
import { Controller, Control } from "react-hook-form";
import TextInput, { TextInputProps } from "./TextInput";

type Props = TextInputProps & {
  name: string;
  control: Control<any>;
};

const FormTextInput: FC<Props> = ({ control, name, ...rest }) => (
  <Controller
    control={control}
    name={name}
    render={({
      field: { onChange: onChangeText, onBlur, value, ref },
      fieldState: { error },
    }) => (
      <TextInput
        inputRef={ref}
        error={error?.message}
        {...rest}
        overrideTextInputProps={{
          onBlur,
          onChangeText,
          value,
          ...rest.overrideTextInputProps,
        }}
      />
    )}
  />
);

export default memo(FormTextInput);
