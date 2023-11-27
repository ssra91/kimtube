import styled from "@emotion/styled";
import Comment from "@/src/views/Watch/components/Comments/Comment";
import Replies from "@/src/views/Watch/components/Comments/Replies";
import { useState } from "react";
import { ICommentItem } from "@/src/models/comments";

interface Props {
  item: ICommentItem;
}

const TopLevelComment = ({ item }: Props) => {
  const [open, setOpen] = useState(false);
  console.log("@@ item", item);
  const { authorDisplayName, textDisplay, authorProfileImageUrl } =
    item.snippet.topLevelComment.snippet;

  return (
    <Container>
      <Comment
        authorDisplayName={authorDisplayName}
        displayText={textDisplay}
        authorProfileImageUrl={authorProfileImageUrl}
      />
      {item.snippet.totalReplyCount > 0 && (
        <>
          <button onClick={() => setOpen((v) => !v)}>더보기</button>
          {open && <Replies id={item.id} />}
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  background-color: #444;
  margin: 20px;
  button {
    color: #fff;
  }
`;

export default TopLevelComment;
