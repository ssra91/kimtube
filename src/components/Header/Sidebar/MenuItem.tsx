import styled from "@emotion/styled";
import Link from "next/link";
import { ILinkData } from "@/src/mock/sidebar/main";

interface Props {
  item: ILinkData;
}
const MenuItem = ({ item }: Props) => {
  return (
    <Container>
      <SidebarLink href={item.links}>
        <IconWrapper>{item.icon}</IconWrapper>
        {item.text}
      </SidebarLink>
    </Container>
  );
};

const Container = styled.div``;
export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 12px;
  height: 48px;
  font-size: 14px;
  color: #f1f1f1;
  line-height: 24px;
  font-weight: 400;
`;

export const IconWrapper = styled.div`
  display: flex;
  margin-right: 24px;
`;

export default MenuItem;
