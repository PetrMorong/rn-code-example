import React, { Fragment } from "react";
import { Image } from "react-native";
import { get } from "lodash";
import { UPLOADS_PUBLIC_ROOT_URL } from "@src/config/env.json";
import {
  withGetStorefrontCategoriesQuery,
  GetStorefrontCategoriesQueryProps
} from "@src/graphql/common";
import { GetStorefrontCategories_category } from "@src/graphql/common/__generated__/GetStorefrontCategories";

const dimensions = { width: 30, height: 30 };

type Props = GetStorefrontCategoriesQueryProps & { categoryId: number };

const CategoryImage = ({ getStorefrontCategories, categoryId }: Props) => {
  const categories = get(
    getStorefrontCategories,
    "category",
    []
  ) as GetStorefrontCategories_category[];
  const selectedCategory = categories.find(
    (item: { id: number }) => item.id === categoryId
  );
  return (
    <Fragment>
      {categories && selectedCategory && (
        <Image
          source={{
            uri: `${UPLOADS_PUBLIC_ROOT_URL}/icons%2F${
              selectedCategory.icon
            }.png?alt=media&token=0d2b4665-2fba-45f8-b17b-674811bd1dcf`
          }}
          resizeMode="contain"
          style={dimensions}
        />
      )}
    </Fragment>
  );
};

export default withGetStorefrontCategoriesQuery()(CategoryImage);
