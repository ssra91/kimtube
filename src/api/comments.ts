import { httpClient } from "@/src/api/httpClient";

export interface ICommentParams {
  part: string;
  videoId?: string;
  id?: string;
  order?: "time" | "relevance";
}

export const fetchCommentThreads = async (params: ICommentParams) => {
  const res = await httpClient({
    method: "GET",
    url: "/commentThreads",
    params,
  });
  return res.data;
};
