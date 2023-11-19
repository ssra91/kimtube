import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { fetchVideos } from "@/src/api/videos";
import VideosItem from "@/src/components/VideoItem";
import GridList from "@/src/components/GridList";

const VideosList = () => {
  const { data, isLoading, isError } = useQuery(
    ["videos"],
    () =>
      fetchVideos({
        part: "snippet, statistics",
        chart: "mostPopular",
      }),
    {},
  );
  return (
    <Container>
      <GridList cols={6} gap={[16, 40]}>
        {data?.items.map((item) => <VideosItem key={item.id} item={item} />)}
      </GridList>
    </Container>
  );
};

const Container = styled.div``;

export default VideosList;
