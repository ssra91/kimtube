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
  console.log("@@ data", data);
  if (isLoading) return <p>로딩중</p>;
  if (isError) return <p>에러</p>;

  const watchList = data.items.filter((item) => !!item.id.videoId);

  return (
    <Container>
      <ListItemsContainer>
        <SearchVideoItemWrapper>
          {watchList.map((item) => (
            <SearchVideoItem key={item.id.videoId} item={item} />
          ))}
        </SearchVideoItemWrapper>
      </ListItemsContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-left: 72px;
`;
const ListItemsContainer = styled.div`
  margin: 0 auto;
  padding: 0 24px 16px;
  max-width: 1280px;
`;
const SearchVideoItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 24px;
  padding: 24px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  color: #f1f1f1;
  font-size: 18px;
  font-weight: 400;
`;

export default Search;
