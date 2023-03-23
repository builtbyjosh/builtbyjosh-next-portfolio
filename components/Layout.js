import { Box, Flex, Heading, Stack, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import Header from "./Header";
import PageIcons from "./PageIcons";

const Layout = ({ heading, children }) => {
  return (
    <Box h={"100vh"}>
      <Header />
      <Flex
        align="center"
        justify="center"
        id="contact"
        pb={{ base: "120px", md: "20px" }}
      >
        <Box m={{ base: 5, md: 12, lg: 6 }} p={{ base: 5, lg: 12 }}>
          <Box>
            <VStack spacing={{ base: 4, md: 8, lg: 10 }}>
              <Heading
                fontSize={{
                  base: "4xl",
                  md: "5xl",
                }}
              >
                {heading}
              </Heading>

              <Stack
                spacing={{ base: 4, md: 8, lg: 10 }}
                direction={{ base: "column", md: "row" }}
              >
                <PageIcons />
                <motion.div
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 300, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <Box
                    bg={"neutral.100"}
                    borderRadius="lg"
                    p={8}
                    shadow="base"
                    minW={"xl"}
                  >
                    <VStack textColor={"secondary.800"}>{children}</VStack>
                  </Box>
                </motion.div>
              </Stack>
            </VStack>
          </Box>
        </Box>
      </Flex>

      <Footer />
    </Box>
  );
};

export default Layout;
