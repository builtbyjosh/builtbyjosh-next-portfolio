import { Box, Flex, Heading, Stack, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import Header from "./Header";
import PageIcons from "./PageIcons";

const Layout = ({ heading, children }) => {
  return (
    <Box h={"100vh"}>
      <Header />
      <Flex align="center" justify="center" pb={{ base: "120px", md: "20px" }}>
        <Box m={{ base: 2, md: 12, lg: 6 }} p={{ base: 0, lg: 12 }}>
          <Box>
            <VStack spacing={{ base: 4, md: 8, lg: 10 }}>
              <Heading
                fontSize={{
                  base: "4xl",
                  md: "5xl",
                }}
                textAlign={"center"}
              >
                {heading}
              </Heading>

              <Stack
                spacing={{ base: 4, md: 8, lg: 10 }}
                direction={{ base: "column", md: "row" }}
              >
                <PageIcons />
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Box
                    bg={"neutral.100"}
                    borderRadius="lg"
                    p={{ base: 2, md: 8 }}
                    shadow="base"
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
