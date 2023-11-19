import axios from "axios";
import { API_KEY } from "@/src/constants/config";
import { VideosResponse } from "@/src/models/video";

// part parameter = snippet, contentDetails, fileDetails, liveStreamingDetails, player, processingDetails, recordingDetails, statistics, status, suggestions, topicDetails

interface Params {
  part: string;
  chart?: "mostPopular";
  id?: string;
  maxResults?: number;
  regionCode?: string;
  pageToken?: string;
  [key: string]: any;
}
export const fetchVideos = async (params: Params) => {
  const { data } = await axios<VideosResponse>({
    method: "GET",
    url: "https://www.googleapis.com/youtube/v3/videos",
    params: {
      key: API_KEY,
      regionCode: "KR",
      maxResults: 18,
      ...params,
    },
  });
  return data;
};
