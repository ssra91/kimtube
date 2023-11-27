import styled from "@emotion/styled";
import chipData from "@/src/mock/channelHeader";

interface Props {
  onCategoryChange: (categoryId: string) => void;
}

const CategoriesMenu = ({ onCategoryChange }: Props) => {
  return (
    <Container>
      {chipData.map((item) => (
        <Chips key={item.text} onClick={() => onCategoryChange(item.id)}>
          {item.text}
        </Chips>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  height: 56px;
  overflow-y: auto;
  white-space: nowrap;
  padding: 0 24px;
`;
const Chips = styled.span`
  display: flex;
  align-items: center;
  padding: 0 12px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #f1f1f1;
  height: 32px;
`;

export default CategoriesMenu;
