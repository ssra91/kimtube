import styled from "@emotion/styled";
import { IconSearch } from "@/src/assets/icons";
import { ChangeEvent, useState } from "react";
import Mic from "@/src/components/Header/Mic";
import { useRouter } from "next/router";

const SearchBox = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState(""); // 검색어 상태

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${searchText}`);
  };

  const handleInputText = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input onChange={handleInputText} />
        <button type="submit">
          <IconSearch />
        </button>
      </form>
      <Mic />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;

  form {
    display: flex;
    max-width: 640px;
    width: 100%;
    padding-left: 16px;
    border-radius: 100px;
    overflow: hidden;
    border: 1px solid ${({ theme }) => theme.line.line1};
    background-color: ${({ theme }) => theme.bg.bg2};

    input {
      width: 100%;
      height: 40px;
      color: ${({ theme }) => theme.text.text1};
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 64px;
      height: 40px;
      background-color: ${({ theme }) => theme.bg.bg3};
      color: #fff;
      cursor: pointer;
    }
  }
`;

export default SearchBox;
