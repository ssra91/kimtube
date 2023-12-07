import styled from "@emotion/styled";
import CategoriesMenu from "src/views/Home/components/CategoriesMenu";
import { useState } from "react";
import MainInfiniteScroll from "@/src/views/Home/MainInfiniteScroll";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchVideos } from "@/src/api/videos";
import VideosList from "@/src/views/Home/components/VideosList";

const Home = () => {
  const [videoCategoryId, setVideoCategoryId] = useState<string | undefined>(
    undefined,
  );
  const handleCategoryChange = (id: string) => {
    setVideoCategoryId(id);
  };

  const { fetchNextPage, data } = useInfiniteQuery({
    queryKey: ["videos"],
    queryFn: ({ pageParam }) =>
      fetchVideos({
        chart: "mostPopular",
        pageToken: pageParam,
        videoCategoryId,
      }),
    cacheTime: 1000 * 60 * 30,
    staleTime: 1000 * 60 * 30,
    getNextPageParam: (lastPage, allPages) => {
      console.log("@@ allPages", allPages);
      const { nextPageToken } = allPages[allPages.length - 1];

      return nextPageToken;
    },
  });

  const videos = data?.pages.map((page) => page.items).flat();

  if (videos?.length === 0) return <p>데이터가 존재하지 않습니다.</p>;

  if (!videos) return <div>로딩중</div>;
  return (
    <Container>
      <CategoriesMenu onCategoryChange={handleCategoryChange} />
      {/* 비디오 카테고리 */}
      {/* 비디오 리스트 */}
      <MainInfiniteScroll onNext={() => fetchNextPage()}>
        <VideosList data={videos} />
      </MainInfiniteScroll>
    </Container>
  );
};

const Container = styled.div``;

export default Home;
