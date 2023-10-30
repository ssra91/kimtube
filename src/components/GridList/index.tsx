import styled from "@emotion/styled";
import React from "react";

interface Props {
  children: React.ReactNode;
  cols: number;
  gap?: number;
}
const GirdList = ({ cols, gap = 0, children }: Props) => {
  return (
    <Container cols={cols} gap={gap}>
      {children}
    </Container>
  );
};

const Container = styled.div<{ cols: number; gap: number }>`
  display: grid;
  gap: ${({ gap }) => gap}px;
  grid-template-columns: repeat(${({ cols }) => cols}, 1fr);
`;

export default GirdList;
