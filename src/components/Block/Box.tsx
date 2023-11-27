import styled, { CSSObject } from "@emotion/styled";
import React from "react";

export interface DefaultBoxProps {
  tag?: "div" | "span";
  display?: "flex" | "block" | "inline-block";
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  radius?: string;
  border?: string;
  customStyle?: CSSObject;
}
interface Props extends DefaultBoxProps {
  children?: any;
  className?: string;
}

// styled box
const Box = ({
  children,
  className,
  tag,
  display,
  padding,
  margin,
  width,
  height,
  backgroundColor,
  radius,
  border,
  customStyle,
}: Props) => {
  return (
    <Container
      className={className}
      display={display}
      as={tag ?? "div"}
      padding={padding}
      margin={margin}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      radius={radius}
      border={border}
      customStyle={customStyle}
    >
      {children}
    </Container>
  );
};

const Container = styled.div<DefaultBoxProps & CSSObject>`
  display: ${({ display }) => display};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ radius }) => radius};
  border: ${({ border }) => border};
  ${({ customStyle }) => customStyle};
`;

export default Box;
