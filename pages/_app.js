import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
// import theme from '../styles/themes'
import theme from "../styles/theme";
import { AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import options from "../public/particlesjs-config.json";

function MyApp({ Component, pageProps }) {
  const particlesInit = async (main) => {
    console.log(main);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <AnimatePresence mode="wait" initial={false}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
        <div className="tsparticles" id="tsparticles">
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={options}
          />
        </div>
      </ChakraProvider>
    </AnimatePresence>
  );
}

export default MyApp;
