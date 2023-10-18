import styled from "@emotion/styled";
import { IconBars, IconLogo } from "@/src/assets/icons";
import IconButton from "@/src/components/Button/IconButton";
import SearchBox from "@/src/components/SearchBox";
import Logo from "@/src/components/Header/Logo";
import Setting from "@/src/components/Header/Setting";
import Sign from "@/src/components/Header/Sign";

const Header = () => {
  return (
    <Container>
      <IconButton>
        <IconBars />
      </IconButton>
      <Logo />
      <SearchBox />
      <Setting />
      <Sign />
      {/* 메뉴 바 */}
      {/* 로고 */}
      {/* 검색창 */}
      {/* 마이크 */}
      {/* 세팅 */}
      {/* 로그인 */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.bg.bg1};
`;

export default Header;
