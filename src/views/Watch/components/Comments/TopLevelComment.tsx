import styled from "@emotion/styled";
import Comment from "@/src/views/Watch/components/Comments/Comment";
import Replies from "@/src/views/Watch/components/Comments/Replies";
import { useState } from "react";
import { ICommentItem } from "@/src/models/comments";
import { IconArrowDown, IconArrowUp } from "@/src/assets/icons";

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
          <button onClick={() => setOpen((v) => !v)}>
            <IconWrapper>
              {open ? <IconArrowUp /> : <IconArrowDown />}
            </IconWrapper>
            댓글
          </button>
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
    display: flex;
    align-items: center;
    padding: 0 16px;
    color: #3ea6ff;
    font-size: 14px;
    line-height: 36px;
    font-weight: 700;
  }
`;

const IconWrapper = styled.div`
  margin-right: 6px;
  width: 24px;
  height: 24px;
`;
export default TopLevelComment;
