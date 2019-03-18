import React from "react";
import { Image } from "react-native";
import { get } from "lodash";
//@ts-ignore
import { UPLOADS_PUBLIC_ROOT_URL } from "@src/config/env.json";
import { withFirebase, FirebaseInjectedProps } from "@src/services/Firebase";
import { ImagePlaceholder } from "@src/assets";
import {
  withSearchUsersBasedOnIdQuery,
  SearchUsersBasedOnIdProps
} from "@src/graphql/messsages";

// TODO searchUsersBasedOnUid types
type Props = {
  isUserThatIsNotLogedIn?: boolean;
  width: number;
  height: number;
  url?: string | null;
  style?: any;
  uid?: string;
} & FirebaseInjectedProps &
  SearchUsersBasedOnIdProps;

//show profile image, if no image show placeholder
const ProfileImage = ({
  firebase,
  width,
  height,
  isUserThatIsNotLogedIn,
  url,
  uid,
  searchUsersBasedOnUid,
  style = {}
}: Props) => {
  const preparedStyle = { width, height, borderRadius: width / 2, ...style };
  //Users profile pic, that needs to be fetched base uid
  if (isUserThatIsNotLogedIn) {
    if (uid) {
      const photoURL = get(searchUsersBasedOnUid, "users[0].photoURL", false);
      return (
        <Image
          source={photoURL ? { uri: photoURL } : ImagePlaceholder}
          style={preparedStyle}
        />
      );
    }
    //Users profile pic coming from url
    return (
      <Image
        source={url ? { uri: url } : ImagePlaceholder}
        style={preparedStyle}
      />
    );
  }
  //My profile pic (logged in user)
  const user = firebase.auth().currentUser!;
  return (
    <Image
      source={
        get(user, "photoURL")
          ? {
              uri: user.photoURL
            }
          : ImagePlaceholder
      }
      style={preparedStyle}
    />
  );
};

export default withFirebase(withSearchUsersBasedOnIdQuery(ProfileImage));
