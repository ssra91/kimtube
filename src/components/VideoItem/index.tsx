import styled from "@emotion/styled";
import { IVideosItem } from "@/src/models/video";
import Link from "next/link";
import Text, { FONT_WEIGHT } from "@/src/components/Typhography/Text";
import { useTheme } from "@emotion/react";
import HStack from "@/src/components/Block/HStack";
import Box from "@/src/components/Block/Box";
import Avatar from "@/src/components/Avatar";
import { numberWithUnit } from "@/src/utils/number";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useChannels } from "@/src/hooks/useChannels";

dayjs.extend(relativeTime);

interface Props {
  item: IVideosItem;
}
const VideosItem = ({ item }: Props) => {
  const theme = useTheme();

  const { channel } = useChannels({
    id: item.snippet.channelId,
  });

  return (
    <Container>
      <div className="thumnail">
        <img src={item.snippet.thumbnails.medium.url} alt="인기 영상" />
      </div>
      <HStack padding="12px 0 0">
        <Avatar
          url={channel?.snippet?.thumbnails?.default?.url}
          margin="0 12px 0 0"
        />

        <Box className="box">
          <Text
            tag="h3"
            level="body16"
            color={theme.text.text1}
            fontWeight={FONT_WEIGHT.MEDIUM}
            margin=" 0 0 4px"
          >
            {item.snippet.title}
          </Text>
          <Link href="/">
            <Text tag="p" level="body14" color={theme.text.text2}>
              {item.snippet.channelTitle}
            </Text>
          </Link>
          <Text tag="p" level="body14" color={theme.text.text2}>
            {numberWithUnit(item.statistics.viewCount)} views streamed{" "}
            {dayjs(item.snippet.publishedAt).fromNow()}
          </Text>
        </Box>
      </HStack>
    </Container>
  );
};

const Container = styled.div`
  img {
    width: 100%;
  }
`;

export default VideosItem;
