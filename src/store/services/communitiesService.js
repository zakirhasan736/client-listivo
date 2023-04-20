import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "../../_config/urls/environment";

const communitiesService = createApi({
  reducerPath: "communitiesSuggestion",
  tagType: "communitiesOperation",
  baseQuery: fetchBaseQuery({
    baseUrl: url.apiUrl,
  }),
  endpoints: (builder) => {
    return {
      addCommunities: builder.mutation({
        query: (dataJson) => {
          return {
            url: "community/addCommunities",
            method: "POST",
            body: dataJson,
          };
        },
        invalidatesTags: ["communitiesOperation"],
      }),

      updateCommunity: builder.mutation({
        query: (dataJson) => {
          return {
            url: "community/updateCommunity",
            method: "POST",
            body: dataJson,
          };
        },
        invalidatesTags: ["communitiesOperation"],
      }),

      deleteCommunity: builder.mutation({
        query: (dataJson) => {
          return {
            url: "community/deleteCommunity",
            method: "POST",
            body: dataJson,
          };
        },
        invalidatesTags: ["communitiesOperation"],
      }),

      CommunitiesSuggestions: builder.mutation({
        query: (dataJson) => {
          return {
            url: "community/communitiesSuggestionRequest",
            method: "POST",
            body: dataJson,
          };
        },
        invalidatesTags: ["communitiesOperation"],
      }),

      getCommunitySuggestionDetail: builder.mutation({
        query: (dataJson) => {
          return {
            url: "community/getSuggestionCommunityDetail",
            method: "POST",
            body: dataJson,
          };
        },
        invalidatesTags: ["communitiesOperation"],
      }),

      getAllCommunitiesSuggestion: builder.query({
        query: () => {
          return {
            url: "community/getAllSuggestionCommunities",
            method: "GET",
          };
        },
        invalidatesTags: ["communitiesOperation"],
      }),

      updateCommunitiesSuggestionRequest: builder.mutation({
        query: (dataJson) => {
          return {
            url: "community/updateSuggestionCommunity",
            method: "POST",
            body: dataJson,
          };
        },
        invalidatesTags: ["communitiesOperation"],
      }),
    };
  },
});

export const {
  useAddCommunitiesMutation,
  useUpdateCommunityMutation,
  useDeleteCommunityMutation,
  useCommunitiesSuggestionsMutation,
  useGetCommunitySuggestionDetailMutation,
  useGetAllCommunitiesSuggestionQuery,
  useUpdateCommunitiesSuggestionRequestMutation,
} = communitiesService;

export default communitiesService;
