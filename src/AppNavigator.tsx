import { createStackNavigator, createAppContainer } from "react-navigation";
import { mapValues } from "lodash";
import routes from "./constants/routes";
import Splash from "./screens/Splash";
import StoreSetupStepOne from "./screens/StoreSetup/StepOne";
import StoreSetupStepTwo from "./screens/StoreSetup/StepTwo";
import StoreSetupStepThree from "./screens/StoreSetup/StepThree";
import StoreSetupStepFour from "./screens/StoreSetup/StepFour";
import StoreSetupCongrats from "./screens/StoreSetup/Congrats";
import BuyerSetupStepOne from "./screens/BuyerSetup/StepOne";
import BuyerSetupStepTwo from "./screens/BuyerSetup/StepTwo";
import BuyerSetupCongrats from "./screens/BuyerSetup/Congrats";
import LogIn from "./screens/LogIn";
import PasswordReset from "./screens/PasswordReset";
import Home from "./screens/Home";
import ProfileSettings from "./screens/Profile/Settings";
import CustomerSupport from "./screens/Profile/CustomerSupport";
import Faq from "./screens/Profile/Faq";
import TermsOfUse from "./screens/Profile/TermsOfUse";
import InvitePeople from "./screens/Profile/InvitePeople";
import GenericError from "./screens/GenericError";
import NewMessage from "./screens/Messages/NewMessage";
import Chat from "./screens/Messages/Chat";
import { withErrorBoundary } from "./services/ErrorBoundary/ErrorBoundary";

const screens = {
  LogIn,
  Splash,
  StoreSetupStepOne,
  StoreSetupStepTwo,
  StoreSetupStepThree,
  StoreSetupStepFour,
  StoreSetupCongrats,
  BuyerSetupStepOne,
  BuyerSetupStepTwo,
  BuyerSetupCongrats,
  PasswordReset,
  Home,
  ProfileSettings,
  TermsOfUse,
  Faq,
  CustomerSupport,
  InvitePeople,
  NewMessage,
  Chat,
  GenericError
};

const AppStackNavigator = createStackNavigator(
  mapValues(screens, screenComponent => withErrorBoundary(screenComponent)),
  {
    initialRouteName: routes.HOME,
    headerMode: "none",
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

export const AppNavigator = createAppContainer(AppStackNavigator);
