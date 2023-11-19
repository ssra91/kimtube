import { httpClient } from "@/src/api/httpClient";
import { SearchResponse } from "@/src/models/serach";

interface ISearchParams {
  part: string;
  q: string;
}

export const searchVideos = async (params: ISearchParams) => {
  const res = await httpClient<SearchResponse>({
    method: "GET",
    url: "/search",
    params,
  });
  return res.data;
};
