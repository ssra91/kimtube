import styled from "@emotion/styled";
import Comment from "@/src/views/Watch/components/Comments/Comment";
import { useComments } from "@/src/views/Watch/hooks/useComments";

interface Props {
  id: string;
}

const Replies = ({ id }: Props) => {
  const { data, isLoading, isError } = useComments({
    part: "snippet, replies",
    id,
    order: "relevance",
  });
  console.log("@@ data", data);
  if (isLoading) return <p>로딩중</p>;
  if (isError) return <p>에러</p>;
  const [comment] = data.items;
  const { replies } = comment;
  return (
    <Container>
      {replies.comments.map((item) => (
        <Comment
          isReply
          displayText={item.snippet.textDisplay}
          authorDisplayName={item.snippet.authorDisplayName}
          authorProfileImageUrl={item.snippet.authorProfileImageUrl}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding-left: 40px;
  margin-bottom: 30px;
`;

export default Replies;
