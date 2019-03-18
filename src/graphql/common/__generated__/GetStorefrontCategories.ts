/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetStorefrontCategories
// ====================================================

export interface GetStorefrontCategories_category {
  __typename: "Category";
  id: number;
  title: string;
  icon: string;
  active: boolean | null;
}

export interface GetStorefrontCategories {
  category: GetStorefrontCategories_category[];
}
