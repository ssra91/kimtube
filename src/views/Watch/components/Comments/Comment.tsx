import styled from "@emotion/styled";
import Avatar from "@/src/components/Avatar";
import Box from "@/src/components/Block/Box";
import HStack from "@/src/components/Block/HStack";

interface Props {
  isReply?: boolean;
  displayText: string;
  authorDisplayName: string;
  authorProfileImageUrl: string;
}

const Comment = ({
  isReply,
  displayText,
  authorDisplayName,
  authorProfileImageUrl,
}: Props) => {
  return (
    <Container>
      <Avatar url={authorProfileImageUrl} size={isReply ? "24px" : "40px"} />
      <Box>
        <HStack>
          <p>{authorDisplayName}</p>
          <span>1일전</span>
        </HStack>

        <p dangerouslySetInnerHTML={{ __html: displayText }} />
      </Box>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 16px;
  padding: 10px;
  background-color: #222;
`;

export default Comment;
