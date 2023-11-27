import { useQuery } from "@tanstack/react-query";
import { fetchChannels, IChannelsParams } from "@/src/api/channel";

export const useChannels = (params: IChannelsParams) => {
  const { data, ...props } = useQuery(
    ["channels", params.id],
    () =>
      fetchChannels({
        part: params.part || "snippet",
        id: params.id,
      }),
    {
      enabled: !!params.id,
      cacheTime: 1000 * 60 * 5,
      staleTime: 1000 * 60,
    },
  );

  const [channel] = data?.items || [];
  return {
    data,
    channel,
    ...props,
  };
};
