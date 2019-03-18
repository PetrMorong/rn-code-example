/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { UserType } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetCurrentUserInfo
// ====================================================

export interface GetCurrentUserInfo_me {
  __typename: "CurrentUser";
  uid: string;
  zip: string | null;
  city: string | null;
  photoURL: string | null;
  displayName: string | null;
  latitude: number | null;
  longitude: number | null;
  type: UserType;
  streetAddress: string | null;
}

export interface GetCurrentUserInfo {
  me: GetCurrentUserInfo_me | null;
}
