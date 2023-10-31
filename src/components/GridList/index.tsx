import styled from "@emotion/styled";
import React from "react";

interface Props {
  children: React.ReactNode;
  cols: number;
  gap?: number[] | number;
}

const GirdList = ({ cols, gap = 0, children }: Props) => {
  const [columGap, rowGap] = Array.isArray(gap) ? gap : [gap];
  return (
    <Container cols={cols} columGap={columGap} rowGap={rowGap ?? columGap}>
      {children}
    </Container>
  );
};

const Container = styled.div<{
  cols: number;
  columGap: number;
  rowGap: number;
}>`
  display: grid;
  column-gap: ${({ columGap }) => columGap}px;
  row-gap: ${({ rowGap }) => rowGap}px;
  grid-template-columns: repeat(${({ cols }) => cols}, 1fr);
`;

export default GirdList;
