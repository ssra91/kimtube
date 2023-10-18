import type { AppProps } from "next/app";
import { GlobalStyle } from "@/src/components/styles/GlobalStyle";
import Header from "@/src/components/Header";

import { ThemeProvider } from "@emotion/react";
import { themes } from "@/src/utils/theme";
import { Theme } from "@/src/models/theme";
import { useState } from "react";
import styled from "@emotion/styled";

export default function App({ Component, pageProps }: AppProps) {
  // const [themeMode, setThemeMode] = useState<"dark" | "light">("dark");
  const themeMode = "dark";

  return (
    <ThemeProvider theme={themes[themeMode] as Theme}>
      <Container>
        {/* <button */}
        {/*  onClick={() => setThemeMode(themeMode === "dark" ? "light" : "dark")} */}
        {/* > */}
        {/*  테마:{themeMode} */}
        {/* </button> */}
        <Header />
        <GlobalStyle />
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  background-color: ${({ theme }) => theme.bg.bg1};
`;
