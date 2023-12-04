import styled from "@emotion/styled";

interface Props {
  children: React.ReactNode;
}
const SidebarItemBox = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  padding: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export default SidebarItemBox;
