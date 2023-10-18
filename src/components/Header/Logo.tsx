import styled from "@emotion/styled";
import Link from "next/link";
import { IconLogo } from "@/src/assets/icons";
import { useEffect, useState } from "react";

const Logo = () => {
  const [lang, setLang] = useState("");

  useEffect(() => {
    setLang(navigator?.language);
  }, []);
  return (
    <Container href="/">
      <IconLogo />
      <Lang>{lang}</Lang>
    </Container>
  );
};

const Container = styled(Link)`
  display: flex;
  align-items: flex-start;
  padding: 0 16px;
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
