import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { theme } from "../styles/theme";

import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />;
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
}
