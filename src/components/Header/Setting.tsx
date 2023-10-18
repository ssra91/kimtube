import styled from "@emotion/styled";
import IconButton from "@/src/components/Button/IconButton";
import { IconDots } from "@/src/assets/icons";

const Setting = () => {
  return (
    <Container>
      <IconButton>
        <IconDots />
      </IconButton>
    </Container>
  );
};

const Container = styled.div`
  margin-right: 8px;
`;

export default Setting;
