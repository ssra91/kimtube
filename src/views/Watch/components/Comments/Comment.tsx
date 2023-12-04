import styled from "@emotion/styled";
import Avatar from "@/src/components/Avatar";
import Box from "@/src/components/Block/Box";
import HStack from "@/src/components/Block/HStack";
import Text from "@/src/components/Typhography/Text";

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
      <HStack>
        <Avatar
          url={authorProfileImageUrl}
          size={isReply ? "24px" : "40px"}
          margin="0 16px 0 0"
        />
        <Box>
          <HStack>
            <Text tag="p" level="caption10">
              {authorDisplayName}
            </Text>
            {/* <span>1일전</span> */}
          </HStack>
          <p dangerouslySetInnerHTML={{ __html: displayText }} />
        </Box>
      </HStack>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 16px;
  padding: 10px;
  background-color: #222;
  p {
    font-size: 14px;
    line-height: 20px;
  }
`;

export default Comment;
