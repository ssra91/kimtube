import styled from "@emotion/styled";
import Link from "next/link";
import { ISearchVideoItem } from "@/src/models/serach";
import HStack from "@/src/components/Block/HStack";
import dayjs from "dayjs";
import Text from "@/src/components/Typhography/Text";
import { useTheme } from "@emotion/react";
import relativeTime from "dayjs/plugin/relativeTime";
import Box from "@/src/components/Block/Box";
import Avatar from "@/src/components/Avatar";
import { useChannels } from "@/src/hooks/useChannels";

dayjs.extend(relativeTime);
interface Props {
  item: ISearchVideoItem;
}

const SearchVideoItem = ({ item }: Props) => {
  const theme = useTheme();
  const { channel } = useChannels({
    id: item?.snippet?.channelId,
  });

  return (
    <Container>
      <HStack>
        <VideoLink href={`/watch?id=${item.id.videoId}`}>
          <img src={item.snippet.thumbnails.medium.url} alt="" />
        </VideoLink>
        <Box className="box">
          <h1 dangerouslySetInnerHTML={{ __html: item.snippet.title }} />
          <Text tag="p" level="body14" color={theme.text.text2}>
            {dayjs(item.snippet.publishedAt).fromNow()}
            <HStack alignItems="center" padding="12px 0">
              <Avatar
                size="24px"
                url={channel?.snippet?.thumbnails?.default?.url}
                margin="0 12px 0 0"
              />
              <Link href="/">
                <Text tag="p" level="body14" color={theme.text.text2}>
                  {item.snippet.channelTitle}
                </Text>
              </Link>
            </HStack>
            <Text
              tag="p"
              level="body14"
              color={theme.text.text2}
              customStyle={{ whiteSpace: "nowrap" }}
            >
              {item.snippet.description}
            </Text>
          </Text>
        </Box>
      </HStack>
    </Container>
  );
};

const Container = styled.div`
  h1 {
    font-size: 18px;
    font-weight: 400;
  }
`;
const VideoLink = styled(Link)`
  margin-right: 16px;
  display: inline-flex;
  max-width: 360px;
  min-width: 240px;
  border-radius: 12px;
  overflow: hidden;
`;

export default SearchVideoItem;
