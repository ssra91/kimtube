import { API_KEY } from "@/src/constants/config";
import { VideosResponse } from "@/src/models/video";
import { httpClient } from "@/src/api/httpClient";

// part parameter = snippet, contentDetails, fileDetails, liveStreamingDetails, player, processingDetails, recordingDetails, statistics, status, suggestions, topicDetails

export interface IVideosParams {
  part?: string;
  chart?: "mostPopular";
  id?: string;
  maxResults?: number;
  regionCode?: string;
  pageToken?: string;
  videoCategoryId?: string;
  [key: string]: any;
}
export const fetchVideos = async (params: IVideosParams) => {
  const { data } = await httpClient<VideosResponse>({
    method: "GET",
    url: "/videos",
    params: {
      key: API_KEY,
      part: "snippet, id, statistics",
      regionCode: "KR",
      maxResults: 20,
      ...params,
    },
  });

  return data;
};
