import VideosList from "@/src/views/Home/components/VideosList";
import styled from "@emotion/styled";

const Home = () => {
  return (
    <Container>
      {/* 비디오 카테고리 */}
      {/* 비디오 리스트 */}
      <VideosList />

    </Container>
  );
};

const Container = styled.div``;

export default Home;
