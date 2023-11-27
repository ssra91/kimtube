import React, { useState } from "react";
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
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { store } from "@/src/redux/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  const themeMode = "dark";

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 0,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return (
    <Provider store={store}>
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
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  );
}

const Container = styled.div`
  padding-top: 56px;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.bg.bg1};
`;
