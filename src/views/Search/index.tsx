import styled from "@emotion/styled";
import { searchVideos } from "@/src/api/search";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { SearchResponse } from "@/src/models/serach";
import SearchVideoItem from "@/src/views/Search/components/SearchVideoItem";

const Search = () => {
  const router = useRouter();
  const q = router.query.searchQuery;
  const { data, isLoading, isError } = useQuery<SearchResponse>(
    ["search", q],
    () =>
      searchVideos({
        part: "snippet,id",
        q: q as string,
      }),
    {
      enabled: typeof q === "string",
      cacheTime: 1000 * 60 * 5,
      staleTime: 1000 * 60,
    },
  );
  if (isLoading) return <p>로딩중</p>;
  if (isError) return <p>에러</p>;

  const watchList = data.items.filter((item) => !!item.id.videoId);

  return (
    <Container>
      {watchList.map((item) => (
        <SearchVideoItem key={item.id.videoId} item={item} />
      ))}
    </Container>
  );
};

const Container = styled.div``;

export default Search;
