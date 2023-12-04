import styled from "@emotion/styled";
import Logo from "@/src/components/Header/Logo";
import Sign from "@/src/components/Header/Sign";
import { toggleSidebar } from "@/src/redux/app/slice";
import { useAppDispatch } from "@/src/redux/hooks";
import Menu from "@/src/components/Header/Menu";
import Sidebar from "@/src/components/Header/Sidebar/sidebar";
import SearchBox from "@/src/components/SearchBox";

const Header = () => {
  const dispatch = useAppDispatch();

  const handleMenuClick = () => {
    dispatch(toggleSidebar());
  };
  return (
    <>
      <Container>
        <Menu onClick={handleMenuClick} />
        <Logo />
        <SearchBox />
        <Sidebar />
        <Sign />
      </Container>
      <Sidebar />
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  height: 56px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.bg.bg1};
  z-index: 1000;
`;

export default Header;
