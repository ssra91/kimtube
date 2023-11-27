import VideosList from "@/src/views/Home/components/VideosList";
import styled from "@emotion/styled";
import CategoriesMenu from "src/views/Home/components/CategoriesMenu";
import { useVideos } from "@/src/hooks/useVideos";
import { useState } from "react";

const Home = () => {
  const [videoCategoryId, setVideoCategoryId] = useState<string | undefined>(
    undefined,
  );
  const { data, isLoading, isError } = useVideos({
    chart: "mostPopular",
    videoCategoryId,
  });

  const handleCategoryChange = (id: string) => {
    setVideoCategoryId(id);
  };

  if (!data) return <div>로딩중</div>;
  return (
    <Container>
      <CategoriesMenu onCategoryChange={handleCategoryChange} />
      {/* 비디오 카테고리 */}
      {/* 비디오 리스트 */}
      <VideosList data={data.items} />
    </Container>
  );
};

const Container = styled.div``;

export default Home;
