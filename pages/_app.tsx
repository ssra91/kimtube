import type { AppProps } from "next/app";
import { GlobalStyle } from "@/src/components/styles/GlobalStyle";
import Header from "@/src/components/Header";
import { ThemeProvider } from "@emotion/react";
import { themes } from "@/src/utils/theme";
import styled from "@emotion/styled";
import { ThemeProps } from "@/src/models/theme";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  const themeMode = "dark";

  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={themes[themeMode] as ThemeProps}>
          <Container>
            <GlobalStyle />
            <Header />
            <Component {...pageProps} />
          </Container>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

const Container = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.bg.bg1};
`;
