import styled from "@emotion/styled";
import React from "react";

const typhographyMap = {
  h1: {
    fontSize: "20px",
    lineHeight: "28px",
  },
  h2: {
    fontSize: "18px",
    lineHeight: "26px",
  },
  h3: {
    fontSize: "16px",
    lineHeight: "22px",
  },
  p1: {
    fontSize: "14px",
    lineHeight: "20px",
  },
  p2: {
    fontSize: "12px",
    lineHeight: "18px",
  },
  c1: {
    fontSize: "13px",
    lineHeight: "18px",
  },
};

export const FONT_WEIGHT = {
  REGULAR: 400,
  MEDIUM: 500,
  SEMI_BOLD: 600,
  BOLD: 700,
};

type FontWeightValue = (typeof FONT_WEIGHT)[keyof typeof FONT_WEIGHT];

interface StyleProps {
  color?: string;
  padding?: string;
  margin?: string;
  fontWeight?: FontWeightValue;
  lineHeight?: string;
  fontSize?: string;
}
interface Props extends StyleProps {
  children?: React.ReactNode;
  tag: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "strong" | "em";
  level: "h1" | "h2" | "h3" | "p1" | "p2" | "c1";
  value?: string;
}

const Text = ({
  children,
  tag,
  level,
  value,
  fontWeight,
  color,
  padding,
  margin,
}: Props) => {
  const typhography = typhographyMap[level];
  return (
    <Container
      as={tag}
      fontWeight={fontWeight ?? FONT_WEIGHT.REGULAR}
      color={color}
      padding={padding}
      margin={margin}
      {...typhography}
    >
      {children || value}
    </Container>
  );
};

const Container = styled.div<StyleProps>`
  color: ${({ color }) => color ?? "inherit"};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  font-weight: ${({ fontWeight }) => fontWeight};
  line-height: ${({ lineHeight }) => lineHeight};
  font-size: ${({ fontSize }) => fontSize};
`;

export default Text;
