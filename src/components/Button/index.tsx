import React from "react";
import Text from "@src/components/Text";
import { ActivityIndicator, View, GestureResponderEvent } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as S from "./styles";

interface Props {
  children: string;
  variant?: "text" | "contained" | null;
  secondary: boolean | null;
  onPress?: (e: GestureResponderEvent) => void;
  stepper?: boolean;
  stepCurrent?: number;
  stepMax?: number;
  loading?: boolean;
  disabled?: boolean;
}

const Button = ({
  variant,
  children,
  secondary,
  onPress,
  stepper,
  stepCurrent,
  stepMax,
  loading,
  disabled
}: Props) => {
  return (
    <S.Container
      variant={variant}
      onPress={onPress}
      disabled={disabled}
      stepper={stepper}
    >
      {stepper && (
        <Text
          {...(secondary ? null : { color: "white" })}
          size={15}
          lineHeight={19}
          secondary
        >
          <Text
            size={15}
            lineHeight={19}
            weight="bold"
            {...(secondary ? null : { color: "white" })}
          >
            {stepCurrent}
          </Text>
          {`/${stepMax}`}
        </Text>
      )}

      <View style={{ flexDirection: "row" }}>
        {loading && (
          <ActivityIndicator
            size="small"
            color="#fff"
            style={{ marginRight: 10 }}
          />
        )}
        <Text
          weight="bold"
          {...(secondary ? null : { color: "white" })}
          size={15}
          lineHeight={19}
          secondary
        >
          {children}
        </Text>
      </View>
      {stepper && (
        <MaterialIcons name="arrow-forward" size={25} color="white" />
      )}
    </S.Container>
  );
};

Button.defaultProps = {
  variant: "contained",
  secondary: false,
  stepper: false,
  stepCurrent: 1,
  stepMax: 0,
  disabled: false,
  loading: false,
  sticky: false
};

export default Button;
