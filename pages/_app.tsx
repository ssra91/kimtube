import type { AppProps } from "next/app";
import { GlobalStyle } from "@/src/components/styles/GlobalStyle";
import Header from "@/src/components/Header";
import { ThemeProvider } from "@emotion/react";
import { themes } from "@/src/utils/theme";
import styled from "@emotion/styled";
import { ThemeProps } from "@/src/models/theme";

export default function App({ Component, pageProps }: AppProps) {
  const themeMode = "dark";

  return (
    <ThemeProvider theme={themes[themeMode] as ThemeProps}>
      <Container>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.bg.bg1};
`;
