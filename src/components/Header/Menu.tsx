import styled from "@emotion/styled";
import { IconBars } from "@/src/assets/icons";
import IconButton from "@/src/components/Button/IconButton";

interface Props {
  onClick: () => void;
}
const Menu = ({ onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      <IconButton>
        <IconBars />
      </IconButton>
    </Container>
  );
};

const Container = styled.div``;

export default Menu;
