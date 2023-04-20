import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "../../_config/urls/environment";

const reportService = createApi({
  reducerPath: "reporting",
  tagType: "reportingOperation",
  baseQuery: fetchBaseQuery({
    baseUrl: url.apiUrl,
  }),
  endpoints: (builder) => {
    return {
      reportToListing: builder.mutation({
        query: (dataJson) => {
          return {
            url: "listing/reportListing",
            method: "POST",
            body: dataJson,
          };
        },
        invalidatesTags: ["reportingOperation"],
      }),
    };
  },
});

export const { useReportToListingMutation } = reportService;

export default reportService;
