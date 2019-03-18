/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ValidationAddress } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: ValidateAddress
// ====================================================

export interface ValidateAddress_validate {
  __typename: "Validation";
  address: boolean;
}

export interface ValidateAddress {
  validate: ValidateAddress_validate;
}

export interface ValidateAddressVariables {
  address: ValidationAddress;
}
