import { useQuery } from "@tanstack/react-query";
import { CommentsResponse } from "@/src/models/comments";
import { fetchCommentThreads, ICommentParams } from "@/src/api/comments";

export const useComments = (params: ICommentParams) => {
  return useQuery<CommentsResponse>(
    ["comments", params],
    () => fetchCommentThreads(params),
    {
      enabled: !!params.videoId || !!params.id,
      cacheTime: 1000 * 60 * 5,
      staleTime: 1000 * 60,
    },
  );
};
