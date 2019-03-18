import React from "react";
import { NavigationInjectedProps } from "react-navigation";
import { ScrollView, KeyboardAvoidingView } from "react-native";
import { SecureStore } from "expo";
import { SplashBackground, LogoImage } from "@src/assets";
import { Text, Button, Spacer, BackLink } from "@src/components";
import { withFirebase, FirebaseInjectedProps } from "@src/services/Firebase";
import { routes } from "@src/constants";
import LogInForm from "@src/forms/LogIn";
import * as S from "./styles";

type Props = NavigationInjectedProps & FirebaseInjectedProps;

export class LogIn extends React.PureComponent<Props> {
  handleForgotPassword = () => {
    const { navigation } = this.props;
    navigation.navigate(routes.PASSWORD_RESET);
  };

  handleSubmit = () => {
    const { navigation } = this.props;
    SecureStore.setItemAsync("userLoggedIn", "true");
    navigation.navigate(routes.HOME);
  };

  handleGoBack = () => {};

  render(): JSX.Element {
    const { firebase } = this.props;
    const { navigation } = this.props;
    return (
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }} enabled>
        <ScrollView keyboardShouldPersistTaps="always">
          <S.Container source={SplashBackground}>
            <S.BackIcon>
              <BackLink onPress={() => navigation.navigate(routes.SPLASH)} />
            </S.BackIcon>
            <S.LogoWrap>
              <S.Logo source={LogoImage} resizeMode="contain" />
            </S.LogoWrap>
          </S.Container>
          <S.BottomWrap>
            <S.BottomTitle>
              <Text weight="bold" size={22} lineHeight={28} center>
                Welcome Back
              </Text>
            </S.BottomTitle>
            <LogInForm onSubmit={this.handleSubmit} firebase={firebase} />
            <Spacer height={15} />
            <Button
              onPress={this.handleForgotPassword}
              variant="text"
              secondary
            >
              Forgot your password ?
            </Button>
          </S.BottomWrap>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default withFirebase(LogIn);
