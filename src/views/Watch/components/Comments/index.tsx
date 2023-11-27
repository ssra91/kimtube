import styled from "@emotion/styled";
import { useRouter } from "next/router";
import TopLevelComment from "@/src/views/Watch/components/Comments/TopLevelComment";
import { useComments } from "@/src/views/Watch/hooks/useComments";

const Comments = () => {
  const router = useRouter();
  const videoId = router.query.id;
  const { data, isLoading, isError } = useComments({
    part: "snippet",
    videoId: videoId as string,
    order: "relevance",
  });
  console.log("@@ data", data);
  if (isLoading) return <p>로딩중</p>;
  if (isError) return <p>에러</p>;

  return (
    <Container>
      <div>
        {data.items.map((item) => (
          <TopLevelComment key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  color: #fff;
`;

export default Comments;
