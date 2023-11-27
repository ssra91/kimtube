import styled from "@emotion/styled";
import { IVideosItem } from "@/src/models/video";
import Text, { FONT_WEIGHT } from "@/src/components/Typhography/Text";
import { useTheme } from "@emotion/react";
import HStack from "@/src/components/Block/HStack";
import Avatar from "@/src/components/Avatar";
import Link from "next/link";
import { useChannels } from "@/src/hooks/useChannels";
import RatioBox from "@/src/components/RatioBox";

interface Props {
  item: IVideosItem;
}
const Player = ({ item }: Props) => {
  const theme = useTheme();
  const { channel } = useChannels({
    id: item.snippet.channelId,
  });

  console.log("@@ channel", channel);

  return (
    <Container>
      <RatioBox>
        <div dangerouslySetInnerHTML={{ __html: item.player?.embedHtml }} />
      </RatioBox>
      <ChannelInfoContainer>
        <Text
          tag="p"
          level="title20"
          color={theme.text.text1}
          fontWeight={FONT_WEIGHT.BOLD}
        >
          {item.snippet.title}
        </Text>
        <HStack alignItems="center" padding="12px 0 0">
          <Avatar
            size="40px"
            url={channel?.snippet?.thumbnails?.default?.url}
            margin="0 12px 0 0"
          />
          <Link href="/" style={{ marginRight: "24px" }}>
            <Text
              tag="p"
              level="body16"
              color="#f1f1f1"
              fontWeight={FONT_WEIGHT.BOLD}
            >
              {item.snippet.channelTitle}
            </Text>
            <Text tag="p" level="caption12" color={theme.text.text2}>
              구독자수
            </Text>
          </Link>
          <button>구독</button>
        </HStack>
      </ChannelInfoContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  iframe {
    width: 100%;
  }
  button {
    padding: 0 16px;
    height: 36px;
    font-size: 14px;
    line-height: 36px;
    border-radius: 18px;
    color: #0f0f0f;
    background-color: #f1f1f1;
  }
`;
const ChannelInfoContainer = styled.div`
  padding: 12px 0 24px;
  color: #f1f1f1;
`;

export default Player;
