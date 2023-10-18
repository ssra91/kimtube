import styled from "@emotion/styled";
import IconButton from "@/src/components/Button/IconButton";
import { IconMic } from "@/src/assets/icons";
import { useTheme } from "@emotion/react";

const Mic = () => {
  const theme = useTheme();
  return (
    <Container>
      <IconButton backgroundColor={theme.bg.bg4}>
        <IconMic />
      </IconButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-left: 16px;
`;

export default Mic;
