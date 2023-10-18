import styled from "@emotion/styled";
import Link from "next/link";
import { IconLogo } from "@/src/assets/icons";
import { useEffect, useState } from "react";

const Logo = () => {
  const [lang, setLang] = useState("");
  const [region] = lang.split("-");

  useEffect(() => {
    setLang(navigator?.language);
  }, []);

  return (
    <Container href="/">
      <IconLogo />
      <Lang>{region}</Lang>
    </Container>
  );
};

const Container = styled(Link)`
  display: flex;
  align-items: flex-start;
  padding: 0 16px;
  color: ${({ theme }) => theme.text.text1};
  svg {
    width: 90px;
    height: 20px;
  }
`;
const Lang = styled.span`
  position: relative;
  top: -4px;
  text-transform: uppercase;
  font-size: 11px;
`;

export default Logo;
