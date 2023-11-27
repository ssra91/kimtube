import { useQuery } from "@tanstack/react-query";
import { fetchVideos, IVideosParams } from "@/src/api/videos";
import { UseQueryOptions } from "@tanstack/react-query/src/types";
import { AxiosError } from "axios";
import { VideosResponse } from "@/src/models/video";

export const useVideos = (
  params: IVideosParams = {},
  options?: Omit<
    UseQueryOptions<
      any,
      AxiosError,
      VideosResponse,
      (string | IVideosParams)[]
    >,
    "initialData"
  > & { initialData?: () => undefined },
) => {
  return useQuery(["videos", params], () => fetchVideos(params), {
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60,
    ...options,
  });
};
