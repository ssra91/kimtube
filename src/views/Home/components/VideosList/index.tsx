import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { fetchVideos } from "@/src/api/videos";

const VideosList = () => {
  const { data } = useQuery(
    ["videos"],
    () =>
      fetchVideos({
        part: "snippet",
        chart: "mostPopular",
      }),
    {},
  );
  return <Container>VideosList</Container>;
};

const Container = styled.div``;

export default VideosList;
