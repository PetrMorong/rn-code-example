import React from "react";
import FlashMessage, { showMessage } from "react-native-flash-message";
import Text from "@src/components/Text";

const flashMessageConfig = {
  duration: 3000,
  hideStatusBar: true
};

export const showSuccessMessage = (text: string) =>
  showMessage({
    message: (
      <Text center color="#1BB558">
        {text}
      </Text>
    ),
    ...flashMessageConfig,
    type: "default",
    backgroundColor: "#E8F8EE"
  });

export const showErrorMessage = (text: string) =>
  showMessage({
    message: (
      <Text center color="#CD5C5C">
        {text}
      </Text>
    ),
    ...flashMessageConfig,
    type: "default",
    backgroundColor: "#F7E8E7"
  });

const FlashMessageComponent: React.FunctionComponent = () => (
  <FlashMessage position="top" />
);

export default FlashMessageComponent;
