import styled from "@emotion/styled";

interface Props {
  url: string;
  size?: string;
  alt?: string;
  margin?: string;
}
const Avatar = ({ url = "", size = "36px", alt = "image", margin }: Props) => {
  return (
    <Container size={size} margin={margin}>
      <img src={url} alt={alt} />
    </Container>
  );
};

const Container = styled.div<{ size: string; margin?: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  margin: ${({ margin }) => margin};
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 100%;
  }
`;

export default Avatar;
