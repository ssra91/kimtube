import styled from "@emotion/styled";
import { useVideos } from "@/src/hooks/useVideos";
import Link from "next/link";
import HStack from "@/src/components/Block/HStack";
import Text from "@/src/components/Typhography/Text";
import Box from "@/src/components/Block/Box";
import { numberWithUnit } from "@/src/utils/number";

interface Props {
  videoCategoryId: string;
}
const RelatedVideos = ({ videoCategoryId }: Props) => {
  const { data, isLoading, isError, error } = useVideos(
    {
      chart: "mostPopular",
      videoCategoryId,
    },
    {
      enabled: !!videoCategoryId,
    },
  );
  console.log("@@ data", data);

  if (isLoading) return <div>로딩중</div>;
  if (isError) return <div>문제발생</div>;

  const relatedVideos = data?.items;
  return (
    <Container>
      {relatedVideos.map((item) => (
        <LinkContainer key={item.id} href={`/watch?id=${item.id}`}>
          <HStack>
            <ImageBlock>
              <img src={item.snippet.thumbnails.default.url} alt="" />
            </ImageBlock>
            <Box className="box">
              <Text tag="h4" level="body14" margin="0 0 4px" color="#f1f1f1">
                {item.snippet.title}
              </Text>
              <div>
                {numberWithUnit(item.statistics.viewCount)} views streamed{" "}
                {/* {dayjs(item.snippet.publishedAt).fromNow()} */}
              </div>
            </Box>
          </HStack>
        </LinkContainer>
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 24px 24px 0 0;
  width: 360px;
  color: #fff;
`;
const LinkContainer = styled(Link)`
  display: flex;
  margin-bottom: 16px;
`;
const ImageBlock = styled.div`
  margin-right: 8px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
`;

export default RelatedVideos;
