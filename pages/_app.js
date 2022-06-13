import { ChakraProvider } from "@chakra-ui/react";
import SidebarWithHeader from "@components/sidebar/sidebar";

import "@styles/globals.css";

import theme from "@styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarWithHeader>
        <div className="h-auto p-5">
          <Component {...pageProps} />
        </div>
      </SidebarWithHeader>
    </ChakraProvider>
  );
}

export default MyApp;
