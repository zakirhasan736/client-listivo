import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "../../_config/urls/environment";

const customerService = createApi({
  reducerPath: "customer",
  tagType: "customerOperation",
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
      updateUserPersonalInfo: builder.mutation({
        query: (dataJson) => {
          return {
            url: "auth/updateUserPersonalInfo",
            method: "POST",
            body: dataJson,
          };
        },
        invalidatesTags: ["customerOperation"],
      }),

      deleteCustomer: builder.mutation({
        query: (dataJson) => {
          return {
            url: "auth//deleteCustomer",
            method: "POST",
            body: dataJson,
          };
        },
        invalidatesTags: ["customerOperation"],
      }),
    };
  },
});

export const { useUpdateUserPersonalInfoMutation, useDeleteCustomerMutation } =
  customerService;

export default customerService;
