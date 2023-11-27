import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Player from "@/src/views/Watch/components/Player";
import HStack from "@/src/components/Block/HStack";
import VStack from "@/src/components/Block/VStack";
import RelatedVideos from "@/src/views/Watch/components/RelatedVideos";
import { useVideos } from "@/src/hooks/useVideos";
import Comments from "@/src/views/Watch/components/Comments";

// 영상 조회하고 클릭해서 들어가는 상세
const Watch = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, isError, error } = useVideos(
    {
      part: "snippet, statistics, player",
      id: id as string,
    },
    {
      enabled: typeof id === "string",
    },
  );

  if (isLoading) return <p>로딩중</p>;
  if (isError) return <p>에러</p>;

  const [videoItem] = data.items;
  return (
    <Container>
      <HStack>
        <VStack
          customStyle={{
            flex: 1,
          }}
        >
          <div className="padding">
            <Player item={videoItem} />
            <Comments />
          </div>
        </VStack>
        <RelatedVideos videoCategoryId={videoItem.snippet.categoryId} />
      </HStack>
    </Container>
  );
};

const Container = styled.div`
  .padding {
    padding-top: 24px;
  }
`;

export default Watch;
