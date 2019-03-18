import { PickedImageType } from "@src/types";
import {
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
  StackActions,
  NavigationActions
} from "react-navigation";
import { split } from "lodash";

export const getImageMimeType = (image: PickedImageType) => {
  const uriParts = split(image.uri, ".");
  let fileType = uriParts[uriParts.length - 1];
  if (fileType === "jpg") {
    fileType = "jpeg";
  }
  return `image/${fileType}`;
};

export const createImageBlob = async (image: PickedImageType) => {
  const blob: { close: Function } = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(xhr.response);
    };
    xhr.onerror = function(e) {
      console.error(e);
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", image.uri, true);
    xhr.send(null);
  });
  return blob;
};

/**
 * Clears the navigation stack and changes route
 * so there's no option to go back
 */
export const navigateClean = (
  navigation: NavigationScreenProp<NavigationRoute<NavigationParams>>,
  route: string
) => {
  navigation.dispatch(
    StackActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName: route })]
    })
  );
};
