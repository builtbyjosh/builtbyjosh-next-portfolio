// import '../styles/globals.css';
import { ChakraProvider } from "@chakra-ui/react";
// import theme from '../styles/themes'
import theme from "../styles/theme";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AnimatePresence>
  );
}

export default MyApp;
