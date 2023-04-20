import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "../../_config/urls/environment";

const categoryService = createApi({
  reducerPath: "category",
  tagType: "categories",
  baseQuery: fetchBaseQuery({
    baseUrl: url.apiUrl,
  }),
  endpoints: (builder) => {
    return {
      allCategories: builder.query({
        query: () => {
          return {
            url: "category/getCategory",
            method: "GET",
          };
        },
        providesTags: ["categories"],
      }),
    };
  },
});

export const { useAllCategoriesQuery } = categoryService;

export default categoryService;
