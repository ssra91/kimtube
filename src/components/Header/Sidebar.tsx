import styled from "@emotion/styled";
import Menu from "@/src/components/Header/Menu";
import Logo from "@/src/components/Header/Logo";
import { toggleSidebar } from "@/src/redux/app/slice";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector((state) => state.app.isSidebarOpen);
  const toggleMenu = () => {
    dispatch(toggleSidebar());
  };
  return (
    <>
      <Container isOpen={isSidebarOpen}>
        <Head>
          <Menu onClick={toggleMenu} />
          <Logo />
        </Head>
      </Container>
      <Screen isOpen={isSidebarOpen} onClick={toggleMenu} />
    </>
  );
};

const Container = styled.div<{ isOpen: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 240px;
  background-color: #0f0f0f;
  color: #fff;
  z-index: 100;
  transition: 0.25s;
  transform: ${({ isOpen }) => (isOpen ? "none" : "translateX(-100%)")};
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding-left: 16px;
`;

const Screen = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.42);
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

export default Sidebar;
