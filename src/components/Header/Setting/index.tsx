import styled from "@emotion/styled";
import IconButton from "@/src/components/Button/IconButton";
import { IconDots } from "@/src/assets/icons";
import Content from "@/src/components/Header/Setting/Content";

const Setting = () => {
  const toggleSetting = () => {};
  return (
    <Container>
      <IconButton onClick={toggleSetting}>
        <IconDots />
      </IconButton>
      {/* <Content /> */}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  margin-right: 8px;
`;

export default Setting;
