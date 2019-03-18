import {
  StyleSheet,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData
} from "react-native";
import * as React from "react";
import { noop } from "lodash";
import { TextField } from "react-native-material-textfield";
import { colors } from "@src/constants";

import * as Styled from "./styles";

interface Props {
  label?: string;
  value: string;
  onChangeText?: (text: string) => void;
  keyboardType?: "numeric" | "email-address" | "default";
  autoFocus?: boolean;
  width: number | string;
  error?: string | null;
  maxLength?: number | null;
  placeholder?: string;
  blurOnSubmit?: boolean;
  style?: any;
  touched: boolean;
  onBlur?: () => void;
  onFocus?: () => void;
  disabled?: boolean;
  handleKeyPress?: () => void;
  charCount?: boolean;
  multiline?: boolean;
  type?: "datepicker" | "location" | "normal";
  onSubmitEditing?: (
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) => void;
  freezeTitle?: boolean;
  secureTextEntry?: boolean;
  autoCapitalize?: "characters" | "words" | "sentences" | "none";
}

class Input extends React.Component<Props> {
  static defaultProps: Partial<Props> = {
    placeholder: "",
    label: "",
    onFocus: noop,
    autoFocus: false,
    blurOnSubmit: true,
    disabled: false,
    onChangeText: noop,
    maxLength: null,
    keyboardType: "default",
    handleKeyPress: noop,
    charCount: false,
    multiline: false,
    style: {},
    type: "normal",
    onSubmitEditing: noop,
    onBlur: noop,
    freezeTitle: false,
    secureTextEntry: false
  };

  textInput: any;

  render() {
    const {
      label,
      value,
      onChangeText,
      keyboardType,
      autoFocus,
      width,
      error,
      maxLength,
      blurOnSubmit,
      style,
      touched,
      onBlur,
      onFocus,
      disabled,
      handleKeyPress,
      multiline,
      /* type, */
      onSubmitEditing,
      secureTextEntry,
      autoCapitalize,
      charCount
    } = this.props;

    return (
      <Styled.InputWrap width={width}>
        <TextField
          label={label}
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          multiline={multiline}
          keyboardType={keyboardType}
          autoFocus={autoFocus}
          error={touched && error ? error : undefined}
          blurOnSubmit={blurOnSubmit}
          onKeyPress={handleKeyPress}
          onBlur={onBlur}
          onFocus={onFocus}
          disabled={disabled}
          tintColor="rgba(61,63,64,0.6)"
          errorColor={colors.error}
          secureTextEntry={secureTextEntry}
          autoCapitalize={
            keyboardType === "email-address" ? "none" : autoCapitalize
          }
          {...(charCount
            ? { characterRestriction: maxLength || undefined }
            : {})}
          labelTextStyle={styles.fontFamily}
          titleTextStyle={styles.fontFamily}
          affixTextStyle={styles.fontFamily}
          {...(Object.keys(style).length > 0 ? { containerStyle: style } : {})}
          style={styles.fontFamily}
        />
      </Styled.InputWrap>
    );
  }
}

const styles = StyleSheet.create({
  fontFamily: {
    fontFamily: "lora-regular"
  }
});

export default Input;
