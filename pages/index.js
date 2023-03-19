import Layout from "../components/Layout";
import { Box, Text } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <Layout heading={"Hi! Im Josh"}>
      <Box>
        <Text>I'm a Full Stack Developer</Text>
      </Box>
    </Layout>
  );
}
