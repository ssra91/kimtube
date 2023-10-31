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

dayjs.extend(relativeTime);

interface Props {
  item: IVideosItem;
}
const VideosItem = ({ item }: Props) => {
  const theme = useTheme();
  return (
    <Container>
      <div className="thumnail">
        <img src={item.snippet.thumbnails.medium.url} alt="인기 영상" />
      </div>
      <HStack padding="12px 0 0">
        <Avatar
          url="https://yt3.ggpht.com/TjSlbvsyFZvCYMrV_ymIEX-_7XiU9P4g3DA-1cKUr0W28h33WgDD0ra8ggyaGxJs4ixwJcUkQA=s68-c-k-c0x00ffffff-no-rj"
          margin="0 12px 0 0"
        />
        <Box>
          <Text
            tag="h3"
            level="h3"
            color={theme.text.text1}
            fontWeight={FONT_WEIGHT.MEDIUM}
            margin=" 0 0 4px"
          >
            {item.snippet.title}
          </Text>
          <Link href="/">
            <Text tag="p" level="p1" color={theme.text.text2}>
              {item.snippet.channelTitle}
            </Text>
          </Link>
          <Text tag="p" level="p1" color={theme.text.text2}>
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
