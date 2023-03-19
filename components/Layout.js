import { Box, Flex, Heading, Stack, VStack } from "@chakra-ui/react";
import SocialIcons from "./SocialIcons";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ heading, children }) => {
  return (
    <Box h={"100vh"} pb={{ base: "120px", md: "20px" }}>
      <Header />
      <Flex align="center" justify="center" id="contact">
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
                <SocialIcons />

                <Box bg={"neutral.100"} borderRadius="lg" p={8} shadow="base">
                  <VStack textColor={"secondary.800"}>{children}</VStack>
                </Box>
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
