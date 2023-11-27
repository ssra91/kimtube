import styled from "@emotion/styled";
import Watch from "@/src/views/Watch";

const WatchPage = () => {
  return (
    <Container>
      <Watch />
    </Container>
  );
};

const Container = styled.div`
  padding: 0 24px 16px;
`;

export default WatchPage;
