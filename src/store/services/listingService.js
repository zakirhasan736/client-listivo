import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "../../_config/urls/environment";

const listingService = createApi({
  reducerPath: "listing",
  tagTypes: "listingOperations",
  baseQuery: fetchBaseQuery({
    baseUrl: url.apiUrl,
    prepareHeaders: (headers, { getState }) => {
      const reducers = getState();
      const token = reducers?.authReducer?.token;
      headers.set("authorization", token ? `Bearer ${token}` : "");
      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      getListings: builder.query({
        query: () => {
          return {
            url: "listing/",
            method: "GET",
          }
        }
      }),
      getReportListing: builder.query({
        query: () => {
          return {
            url: `listing/getReportListing`,
            method: "GET",
          };
        },
        providesTags: ["listingOperations"],
      }),
    };
  },
});

export const { useGetReportListingQuery, useGetListingsQuery } = listingService;

export default listingService;
