import type { AppProps } from "next/app";
import HomePage from "@/pages/index";
import { GlobalStyle } from "@/src/components/styles/GlobalStyle";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GlobalStyle />
      <Component {...pageProps}>
        <HomePage />
      </Component>
    </div>
  );
}
