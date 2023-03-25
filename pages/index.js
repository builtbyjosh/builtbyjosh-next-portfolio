/* eslint-disable react/no-unescaped-entities */
import Layout from "../components/Layout";
import { Container, Text, Heading, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Layout heading={"Welcome!"}>
      <Container maxW={"2xl"} p={2}>
        <Stack mb={4} direction={{ base: "column", md: "row" }}>
          <Text color={"primary.500"}>Hey! My name is </Text>
          <Heading size={"md"}>Joshua Collins</Heading>
        </Stack>
        <Text fontSize={"lg"} color={"primary.500"}>
          I am a software developer specializing in Front End Development based
          in Chicago, Il.{" "}
        </Text>
        <br />
        <Text color={"primary.500"}>
          I am passionate about software development and take pride in creating
          responsive and engaging websites that are not only visually appealing
          but also functional and user-friendly."
        </Text>
      </Container>
    </Layout>
  );
}
