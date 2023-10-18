import styled from "@emotion/styled";
import { IconSearch } from "@/src/assets/icons";
import { ChangeEvent } from "react";
import Mic from "@/src/components/Header/Mic";

const SearchBox = () => {
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input />
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
