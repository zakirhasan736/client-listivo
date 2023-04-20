import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "../../_config/urls/environment";

const languageService = createApi({
  reducerPath: "community",
  tagType: "communities",
  baseQuery: fetchBaseQuery({
    baseUrl: url.apiUrl,
  }),
  endpoints: (builder) => {
    return {
      getCommunities: builder.query({
        query: () => {
          return {
            url: "community/getCommunities",
            method: "GET",
          };
        },
        providesTags: ["communities"],
      }),
    };
  },
});

export const { useGetCommunitiesQuery } = languageService;

export default languageService;
