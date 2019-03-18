import React from "react";
import { View, ActivityIndicator } from "react-native";
import { withFirebase, FirebaseInjectedProps } from "@src/services/Firebase";
import { compose } from "recompose";
import { BottomNavigation, NavigationState } from "react-native-paper";
import { routes } from "@src/constants";
import { get } from "lodash";
import { Text, ProfileImage } from "@src/components";
import Profile from "@src/screens/Profile";
import Messages from "@src/screens/Messages/List";
import Orders from "@src/screens/Orders";
import Storefront from "@src/screens/Storefront";
import {
  withGetCurrentUserInfoQuery,
  GetCurrentUserInfoProps
} from "@src/graphql/common";
import MessagesActiveIcon from "@src/assets/MessagesActive.png";
import MessagesIcon from "@src/assets/Messages.png";
import OrdersIcon from "@src/assets/Orders.png";
import OrdersActiveIcon from "@src/assets/OrdersActive.png";
import StorefrontIcon from "@src/assets/Storefront.png";
import StorefrontActiveIcon from "@src/assets/StorefrontActive.png";
import SearchIcon from "@src/assets/Search.png";
import SearchActiveIcon from "@src/assets/SearchActive.png";
import { UserType } from "../../../__generated__/globalTypes";
import * as S from "./styles";

const Browse = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Storefront!</Text>
  </View>
);

const ICON_NAMES = {
  [routes.ORDERS]: OrdersIcon,
  [routes.MESSAGES]: MessagesIcon,
  [routes.STOREFRONT]: StorefrontIcon,
  [routes.BROWSE_STOREFRONTS]: SearchIcon,
  [routes.PROFILE]: StorefrontIcon
};
const ICON_ACTIVE_NAMES = {
  [routes.ORDERS]: OrdersActiveIcon,
  [routes.MESSAGES]: MessagesActiveIcon,
  [routes.STOREFRONT]: StorefrontActiveIcon,
  [routes.BROWSE_STOREFRONTS]: SearchActiveIcon,
  [routes.PROFILE]: StorefrontActiveIcon
};

const StateStorefrontOwner = {
  index: 2,
  routes: [
    { key: routes.ORDERS },
    { key: routes.MESSAGES },
    { key: routes.STOREFRONT },
    { key: routes.PROFILE }
  ]
};
const StateBuyer = {
  index: 0,
  routes: [
    { key: routes.BROWSE_STOREFRONTS },
    { key: routes.ORDERS },
    { key: routes.MESSAGES },
    { key: routes.PROFILE }
  ]
};

type NavigationTypeParam = { key: string };

type TapBar = { focused: boolean; route: { key: string } };

type State = {
  buyer: NavigationState<NavigationTypeParam>;
  storefrontOwner: NavigationState<NavigationTypeParam>;
};

type Props = FirebaseInjectedProps & GetCurrentUserInfoProps;

class Home extends React.PureComponent<Props, State> {
  state: State = {
    storefrontOwner: StateStorefrontOwner,
    buyer: StateBuyer
  };

  handleIndexChange = (index: number) => {
    const isBuyer =
      get(this.props.getCurrentUserInfo, "me.type") === UserType.BUYER;
    if (isBuyer) {
      this.setState({ buyer: { index, routes: StateBuyer.routes } });
    }
    if (!isBuyer) {
      this.setState({
        storefrontOwner: { index, routes: StateStorefrontOwner.routes }
      });
    }
  };

  renderSceneStorefront = BottomNavigation.SceneMap({
    Orders,
    Messages,
    Profile,
    Storefront
  });

  renderScenesBuyer = BottomNavigation.SceneMap({
    Browse,
    Orders,
    Messages,
    Profile
  });

  renderIcon = ({ focused, route }: TapBar) => {
    if (route.key === routes.PROFILE) {
      return (
        <S.ProfileWrap>
          <ProfileImage width={29} height={29} />
        </S.ProfileWrap>
      );
    }
    return focused ? (
      <S.Icon source={ICON_ACTIVE_NAMES[route.key]} resizeMode="contain" />
    ) : (
      <S.Icon source={ICON_NAMES[route.key]} resizeMode="contain" />
    );
  };

  renderLabel = ({ focused, route }: TapBar) => (
    <Text
      size={10}
      center
      lineHeight={12}
      style={{
        marginTop: 6,
        opacity: focused ? 1 : 0.7
      }}
    >
      {route.key}
    </Text>
  );

  render() {
    const { loading, me } = this.props.getCurrentUserInfo;
    if (loading) {
      return (
        <ActivityIndicator
          size="large"
          style={{ marginTop: 50, color: "black" }}
        />
      );
    }

    let isBuyer = false;
    if (me) isBuyer = me.type === UserType.BUYER;
    const navigationState = isBuyer
      ? this.state.buyer
      : this.state.storefrontOwner;

    return (
      <BottomNavigation<NavigationTypeParam>
        barStyle={{ backgroundColor: "white" }}
        navigationState={navigationState}
        onIndexChange={this.handleIndexChange}
        renderScene={
          isBuyer ? this.renderScenesBuyer : this.renderSceneStorefront
        }
        renderIcon={this.renderIcon}
        renderLabel={this.renderLabel}
      />
    );
  }
}

export default compose<Props, Props>(
  withFirebase,
  withGetCurrentUserInfoQuery
)(Home);
