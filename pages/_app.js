import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@components/navbar/Navbar";

import "@pages/globals.css";

import theme from "../chakra.theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <div className="h-auto bg-background">
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  );
}

export default MyApp;
