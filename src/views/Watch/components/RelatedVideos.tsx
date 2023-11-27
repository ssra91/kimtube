import styled from "@emotion/styled";
import { useVideos } from "@/src/hooks/useVideos";
import Link from "next/link";

interface Props {
  videoCategoryId: string;
}
const RelatedVideos = ({ videoCategoryId }: Props) => {
  const { data, isLoading, isError, error } = useVideos(
    {
      chart: "mostPopular",
      videoCategoryId,
    },
    {
      enabled: !!videoCategoryId,
    },
  );
  console.log("@@ data", data);

  if (isLoading) return <div>로딩중</div>;
  if (isError) return <div>문제발생</div>;

  const relatedVideos = data?.items;
  return (
    <Container>
      {relatedVideos.map((item) => (
        <Link href={`/watch?id=${item.id}`}>
          <p>{item.snippet.title}</p>
          <img src={item.snippet.thumbnails.default.url} alt="" />
        </Link>
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 24px 24px 0 0;
  width: 300px;
  color: #fff;
`;

export default RelatedVideos;
