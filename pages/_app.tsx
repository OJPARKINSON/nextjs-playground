import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DarkModeWrapper } from "../utils/DarkModeWrapper";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkModeWrapper>
      <meta name="theme-color" content="#1a5d8d"></meta>
      <Component {...pageProps} />
    </DarkModeWrapper>
  );
}

export default MyApp;
