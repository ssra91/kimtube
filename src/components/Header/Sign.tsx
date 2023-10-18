import styled from "@emotion/styled";
import { IconUser } from "@/src/assets/icons";

const Sign = () => {
  return (
    <Container>
      <IconUser />
      Sign in
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 36px;
  padding: 0 14px 0 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.color.caption1};
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.line.line2};
  border-radius: 100px;
  cursor: pointer;
`;

export default Sign;
