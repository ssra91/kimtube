import styled, { CSSObject } from "@emotion/styled";
import React from "react";

// | "display40"
// | "display36"
// | "title28"
// | "title26"
// | "title22"
// | "title20"
// | "subtitle18"
// | "body16"
// | "body15"
// | "body14"
// | "caption13"
// | "caption12"
const typographyMap = {
  title20: {
    fontSize: "20px",
    lineHeight: "28px",
  },
  subtitle18: {
    fontSize: "18px",
    lineHeight: "26px",
  },
  body16: {
    fontSize: "16px",
    lineHeight: "22px",
  },
  body14: {
    fontSize: "14px",
    lineHeight: "20px",
  },
  caption12: {
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
  customStyle?: CSSObject;
}
interface Props extends StyleProps {
  children?: React.ReactNode;
  tag: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "strong" | "em";
  level: "title20" | "subtitle18" | "body16" | "body14" | "caption12";
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
  customStyle,
}: Props) => {
  const typography = typographyMap[level];
  return (
    <Container
      as={tag}
      fontWeight={fontWeight ?? FONT_WEIGHT.REGULAR}
      color={color}
      padding={padding}
      margin={margin}
      customStyle={customStyle}
      {...typography}
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
  ${({ customStyle }) => customStyle};
`;

export default Text;
