import styled from "@emotion/styled";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  ratio?: [number, number];
}

const RatioBox = ({ children, ratio = [16, 9] }: Props) => {
  const [ratioX, ratioY] = ratio;
  return (
    <Container ratioX={ratioX} ratioY={ratioY}>
      <Inner>{children}</Inner>
    </Container>
  );
};

const Container = styled.div<{ ratioX: number; ratioY: number }>`
  position: relative;
  padding-bottom: ${({ ratioX, ratioY }) => (ratioY / ratioX) * 100}%;
  border-radius: 12px;
  overflow: hidden;
`;

const Inner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  > *,
  img,
  iframe {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default RatioBox;
