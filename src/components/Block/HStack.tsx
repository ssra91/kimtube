import styled from "@emotion/styled";
import Box, { DefaultBoxProps } from "@/src/components/Block/Box";
import React from "react";

type HStackProps = Omit<DefaultBoxProps, "display">;

type FlexProps = {
  justifyContent?: string;
  alignItems?: string;
  flexWrap?: string;
  flex?: string;
};
type StyledProps = HStackProps & FlexProps;
interface Props extends StyledProps {
  children: React.ReactNode;
}

const HStack = ({ children, ...props }: Props) => {
  return (
    <Container display="flex" {...props}>
      {children}
    </Container>
  );
};

const Container = styled(Box)<FlexProps>`
  flex-direction: row;
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex: ${({ flex }) => flex};
`;

export default HStack;
