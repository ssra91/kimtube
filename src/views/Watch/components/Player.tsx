import styled from "@emotion/styled";
import { IVideosItem } from "@/src/models/video";

interface Props {
  item: IVideosItem;
}
const Player = ({ item }: Props) => {
  return (
    <Container>
      <div dangerouslySetInnerHTML={{ __html: item.player.embedHtml }} />
      <h2>{item.snippet.title}</h2>
    </Container>
  );
};

const Container = styled.div`
  h2 {
    color: #fff;
  }
`;

export default Player;
