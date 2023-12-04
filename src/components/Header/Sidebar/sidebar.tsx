import styled from "@emotion/styled";
import Menu from "@/src/components/Header/Menu";
import Logo from "@/src/components/Header/Logo";
import { toggleSidebar } from "@/src/redux/app/slice";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import SidebarItemBox from "@/src/components/Header/SidebarItemBox";
import linkData from "@/src/mock/sidebar/main";
import MenuItem from "@/src/components/Header/Sidebar/MenuItem";
import questLinkData from "@/src/mock/sidebar/categories";
import historyLinkData from "@/src/mock/sidebar/history";
import Text from "@/src/components/Typhography/Text";
import { IconUser } from "@/src/assets/icons";
import settingLinkData from "@/src/mock/sidebar/setting";

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
        <MenuListBody>
          <SidebarItemBox>
            {linkData.map((item) => (
              <MenuItem key={item.text} item={item} />
            ))}
          </SidebarItemBox>
          <LoginBox>
            <Text tag="p" level="body14">
              로그인하면 동영상에 좋아요를 표시하고 댓글을 달거나 구독할 수
              있습니다.
            </Text>
            <IconLoginButton>
              <IconUser />
              로그인
            </IconLoginButton>
          </LoginBox>
          <SidebarItemBox>
            {historyLinkData.map((item) => (
              <MenuItem key={item.text} item={item} />
            ))}
          </SidebarItemBox>
          <SidebarItemBox>
            {questLinkData.map((item) => (
              <MenuItem key={item.text} item={item} />
            ))}
          </SidebarItemBox>
          {/* <SidebarItemBox> */}
          {/*  <SidebarLink href="/"> */}
          {/*    <IconWrapper> */}
          {/*      <IconPremium /> */}
          {/*    </IconWrapper> */}
          {/*    채널 탐색 */}
          {/*  </SidebarLink> */}
          {/* </SidebarItemBox> */}
          <SidebarItemBox>
            {settingLinkData.map((item) => (
              <MenuItem key={item.text} item={item} />
            ))}
          </SidebarItemBox>
        </MenuListBody>
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

const MenuListBody = styled.div`
  padding-right: 6px;
  height: 100%;
  overflow-y: auto;
`;
const LoginBox = styled.div`
  padding: 16px 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;
const IconLoginButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 12px;
  padding: 0 15px;
  height: 36px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 18px;
  color: #3ea6ff;
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
