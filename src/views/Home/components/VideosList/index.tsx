import styled from "@emotion/styled";
import VideosItem from "@/src/components/VideoItem";
import GridList from "@/src/components/GridList";
import Link from "next/link";
import { IVideosItem } from "@/src/models/video";

interface Props {
  data: IVideosItem[];
}

const VideosList = ({ data }: Props) => {
  return (
    <Container>
      <GridList cols={6} gap={[16, 40]}>
        {data?.map((item) => (
          <Link href={`/watch?id=${item.id}`} key={item.id}>
            <VideosItem item={item} />
          </Link>
        ))}
      </GridList>
    </Container>
  );
};

const Container = styled.div`
  padding: 24px;
`;

export default VideosList;
