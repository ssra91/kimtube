import styled from "@emotion/styled";
import { ReactNode } from "react";
import { css } from "@emotion/react";

interface StyleProps {
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  radius?: string;
}
interface Props extends StyleProps {
  children: ReactNode;
}
const IconButton = ({
  children,
  backgroundColor,
  hoverBackgroundColor,
  radius,
}: Props) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      hoverBackgroundColor={hoverBackgroundColor}
      radius={radius}
    >
      {children}
    </Container>
  );
};

const Container = styled.button<StyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid transparent;
  cursor: pointer;

  border-radius: ${({ radius }) => radius || "50%"};
  ${({ backgroundColor, hoverBackgroundColor }) => css`
    background-color: ${backgroundColor};
    &:hover {
      background-color: ${hoverBackgroundColor || "transparent"};
    }
  `}
`;

export default IconButton;
