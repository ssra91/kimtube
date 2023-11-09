import styled from "@emotion/styled";
import SearchBox from "@/src/components/SearchBox";
import Logo from "@/src/components/Header/Logo";
import Index from "@/src/components/Header/Setting";
import Sign from "@/src/components/Header/Sign";
import Sidebar from "@/src/components/Header/Sidebar";
import Menu from "@/src/components/Header/Menu";
import { toggleSidebar } from "@/src/redux/app/slice";
import { useAppDispatch } from "@/src/redux/hooks";

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
        <Index />
        <Sign />
      </Container>
      <Sidebar />
    </>
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
