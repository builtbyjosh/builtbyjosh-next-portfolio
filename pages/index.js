/* eslint-disable react/no-unescaped-entities */
import Layout from "../components/Layout";
import { Box, Text, Heading, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Layout heading={"Welcome!"}>
      <Box maxW={"2xl"}>
        <Stack mb={4} direction={{ base: "row", md: "column" }}>
          <Text color={"primary.300"}>Hey! My name is </Text>
          <Heading size={"md"}>Joshua Collins</Heading>
        </Stack>
        <Text fontSize={"lg"} color={"primary.300"}>
          I am a software developer specializing in Front End Development based
          in Chicago, Il.{" "}
        </Text>
        <br />
        <Text color={"primary.300"}>
          I am passionate about software development and take pride in creating
          responsive and engaging websites that are not only visually appealing
          but also functional and user-friendly."
        </Text>
      </Box>
    </Layout>
  );
}
