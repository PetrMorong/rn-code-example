import { graphql, /* MutationFn ,*/ GraphqlQueryControls } from "react-apollo";

import {
  ValidateAddress as ValidateAddressResult,
  ValidateAddressVariables
} from "./__generated__/ValidateAddress";

import { GetCurrentUserInfo as GetCurrentUserInfoResult } from "./__generated__/GetCurrentUserInfo";
import { GetStorefrontCategories as GetStorefrontCategoriesResult } from "./__generated__/GetStorefrontCategories";
import validateAddressGql from "./ValidateAddress.graphql";
import getStorefrontCategoriesGql from "./GetStorefrontCategories.graphql";
import GetCurrentUserInfoGql from "./GetCurrentUserInfo.graphql";
import ApolloClient from "apollo-client";

/******************* MUTATIONS *******************/

/******************* QUERY *******************/

export type GetStorefrontCategoriesQueryProps = {
  getStorefrontCategories: GraphqlQueryControls & GetStorefrontCategoriesResult;
};

export type ValidateAddressQueryProps = {
  addressValidation: GraphqlQueryControls & ValidateAddressResult;
} & ValidateAddressVariables;

export const withGetStorefrontCategoriesQuery = () =>
  graphql<any, GetStorefrontCategoriesResult, {}>(getStorefrontCategoriesGql, {
    name: "getStorefrontCategories"
  });

export const withValidateAddressQuery = graphql<any, ValidateAddressResult, {}>(
  validateAddressGql,
  {
    name: "addressValidation",
    skip: props => !props || !props.address,
    options: props => ({
      variables: {
        address: props.address
      }
    })
  }
);

export const clientValidateAddress = (
  client: ApolloClient<unknown>,
  options: { variables: ValidateAddressVariables }
) =>
  client.query<ValidateAddressResult, ValidateAddressVariables>({
    ...options,
    query: validateAddressGql
  });

export type GetCurrentUserInfoProps = {
  getCurrentUserInfo: GraphqlQueryControls & GetCurrentUserInfoResult;
};
export const withGetCurrentUserInfoQuery = graphql<
  any,
  GetCurrentUserInfoResult,
  {}
>(GetCurrentUserInfoGql, {
  name: "getCurrentUserInfo"
});
