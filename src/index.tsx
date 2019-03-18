import React from "react";
import { Sentry } from "react-native-sentry";
import { ApolloProvider } from "react-apollo";
import { StatusBar } from "react-native";
import { AppLoading, Font } from "expo";
import ApolloClient from "./services/Apollo";
// import { LocalAuthenticationProvider } from "./services/TouchFaceIdAuthentication";
import Main from "./Main";
import { FirebaseProvider } from "./services/Firebase";
import { StripeProvider } from "./services/Stripe";
import { GeolocationProvider } from "./services/Geolocation";
import { SENTRY_DSN } from "./config/env.json";
import FlashMessageComponent from "@src/components/FlashMessage";
Sentry.config(SENTRY_DSN).install();
Sentry.setShouldSendCallback(
  () => process && process.env && process.env.NODE_ENV !== "development"
);

interface Props {}

interface State {
  isReady: boolean;
  fontLoaded: boolean;
}

console.disableYellowBox = true;

export class App extends React.PureComponent<Props, State> {
  public state: State = {
    isReady: false,
    fontLoaded: false
  };

  public async componentDidMount() {
    await Font.loadAsync({
      "lora-regular": require("../assets/fonts/Lora-Regular.ttf"),
      "lora-bold": require("../assets/fonts/Lora-Bold.ttf"),
      "lora-italic-bold": require("../assets/fonts/Lora-BoldItalic.ttf"),
      "lora-italic": require("../assets/fonts/Lora-Italic.ttf"),
      "tenor-sans": require("../assets/fonts/TenorSans-Regular.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  public render(): JSX.Element {
    const { isReady, fontLoaded } = this.state;
    if (!isReady || !fontLoaded) {
      return (
        <AppLoading
          startAsync={this.cacheResourcesAsync}
          onFinish={this.finishLoading}
          onError={console.warn}
        />
      );
    }
    return (
      <FirebaseProvider>
        <StatusBar barStyle="dark-content" />
        <ApolloProvider client={ApolloClient}>
          <StripeProvider>
            <GeolocationProvider>
              {/*<LocalAuthenticationProvider>*/}
              <Main />
              <FlashMessageComponent />
              {/*</LocalAuthenticationProvider>*/}
            </GeolocationProvider>
          </StripeProvider>
        </ApolloProvider>
      </FirebaseProvider>
    );
  }
  private finishLoading = () => {
    this.setState((state: State) => {
      return {
        ...state,
        isReady: true
      };
    });
  };

  private cacheResourcesAsync = async () => {
    // tslint:disable:no-require-imports no-floating-promises
    // tslint:enable:no-require-imports no-floating-promises
  };
}
