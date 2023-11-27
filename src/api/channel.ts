import { httpClient } from "@/src/api/httpClient";

export interface IChannelsParams {
  part?: string;
  id: string;
}
export const fetchChannels = async (params: IChannelsParams) => {
  const res = await httpClient({
    method: "GET",
    url: "/channels",
    params,
  });
  return res.data;
};
