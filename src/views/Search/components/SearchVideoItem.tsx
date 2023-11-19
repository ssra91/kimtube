import styled from "@emotion/styled";
import Link from "next/link";
import { ISearchVideoItem } from "@/src/models/serach";

interface Props {
  item: ISearchVideoItem;
}

const SearchVideoItem = ({ item }: Props) => {
  return (
    <Container>
      <Link href={`/watch?id=${item.id.videoId}`}>
        <img src={item.snippet.thumbnails.medium.url} alt="" />
      </Link>
    </Container>
  );
};

const Container = styled.div``;

export default SearchVideoItem;
