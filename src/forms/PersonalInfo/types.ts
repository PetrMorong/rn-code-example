import { GestureResponderEvent } from "react-native";

export type SubmitButtonComponent = React.ComponentType<{
  onSubmit?: (e: GestureResponderEvent) => void;
  isSubmitting: boolean;
}>;
