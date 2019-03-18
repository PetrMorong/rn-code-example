import React from "react";
import { Dimensions } from "react-native";
import { StyledText } from "./styles";
import { AvailableFontWeights } from "./fonts";

const { width } = Dimensions.get("window");

interface Props {
  weight?: AvailableFontWeights;
  size?: number | null;
  color?: string | null;
  uppercase?: boolean;
  secondary?: boolean;
  style?: any;
  center?: boolean;
  lineHeight?: number | null;
  letterSpacing?: number | null;
  opacity?: number | null;
}

const Text: React.FunctionComponent<Props> = ({
  children,
  weight,
  color,
  size,
  uppercase,
  secondary,
  style,
  ...props
}) => {
  const additionalStyle: { color?: string; fontSize?: number } = {};

  if (color) {
    additionalStyle.color = color;
  }
  if (size) {
    additionalStyle.fontSize = size;
    if (width < 330) additionalStyle.fontSize -= 1.5;
  }

  let newStyle;
  if (Array.isArray(style)) {
    newStyle = [...style, additionalStyle];
  } else {
    newStyle = { ...style, ...additionalStyle };
  }

  return (
    <StyledText
      style={newStyle}
      secondary={secondary}
      weight={weight}
      {...props}
    >
      {uppercase && children && typeof children === "string"
        ? children.toUpperCase()
        : children}
    </StyledText>
  );
};

Text.defaultProps = {
  weight: "regular",
  size: null,
  color: null,
  uppercase: false,
  secondary: false,
  center: false,
  style: {},
  lineHeight: 20,
  letterSpacing: -0.36,
  opacity: 1
};

export default Text;
