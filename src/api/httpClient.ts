import axios from "axios";
import { API_KEY } from "@/src/constants/config";

export const httpClient = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  timeout: 6000,
  params: {
    key: API_KEY,
    regionCode: "KR",
  },
});
