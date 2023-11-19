import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { fetchVideos } from "@/src/api/videos";
import { useRouter } from "next/router";
import Player from "@/src/views/Watch/components/Player";

const Watch = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log("@@ router", router);
  const { data, isLoading, isError } = useQuery(
    ["videos"],
    () =>
      fetchVideos({
        part: "snippet, statistics,player",
        id: id as string,
      }),
    {
      enabled: typeof id === "string",
    },
  );
  if (isLoading) return <p>로딩중</p>;
  if (isError) return <p>에러</p>;

  const [videoItem] = data.items;
  return (
    <Container>
      <Player item={videoItem} />
    </Container>
  );
};

const Container = styled.div``;

export default Watch;
