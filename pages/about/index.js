import React from "react";
import {
  Box,
  Text,
  Stack,
  SimpleGrid,
  Container,
  Heading,
  Icon,
} from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

import Layout from "../../components/Layout";
const AboutMe = () => {
  const skillList = [
    "React",
    "TypeScript",
    "JavaScript",
    "NextJS",
    "Chakra-UI",
    "Cypress",
  ];
  return (
    <Layout heading={"A little about Me!"}>
      <Container maxW={"2xl"} p={2}>
        <Stack color={"primary.500"} spacing={5}>
          <Box style={{ textIndent: 30 }} lineHeight="taller">
            <Text>
              I first became intersted in Software development in{" "}
              <span style={{ fontWeight: "bold" }}>2018</span>. I started
              working through{" "}
              <span style={{ fontWeight: "bold" }}>freeCodeCamps</span> learning
              modules and then moved onto Udemy courses.
            </Text>
            <br />
            <Text>
              Fast forward a couple of years, I decided to attend the{" "}
              <span style={{ fontWeight: "bold" }}>
                Flatiron Schools Software Engineering Bootcamp
              </span>
              . Shortly after completing my bootcamp, I landed my first role as
              a Frontend Developer. And had to quickly get up to speed working
              with
              <span style={{ fontWeight: "bold" }}>TypeScript</span> and{" "}
              <span style={{ fontWeight: "bold" }}>Chakra-UI</span>, neither of
              which I had ever worked with before.
            </Text>
            <br />
            <Text>
              All of this has led me to become a seasoned{" "}
              <span style={{ fontWeight: "bold" }}>React</span> developer with
              experience in developing high-quality web applications. I am
              skilled in front-end development, including creating reusable UI
              components and integrating with back-end APIs. I am passionate
              about creating user-friendly and responsive interfaces that
              enhance the user experience.
            </Text>
          </Box>
          <Box border={"1px"} borderRadius={"lg"} p={4} textAlign={"center"}>
            <Heading size={"md"}>
              Here are some of the technologies I have been working with
              recently:
            </Heading>

            <Container maxW={"6xl"} mt={10}>
              <SimpleGrid columns={{ base: 2, sm: 3 }} spacing={10}>
                {skillList.map((skill, index) => (
                  <Stack direction={"row"} key={index} align={"top"}>
                    <Box color={"primary.600"} px={2}>
                      <Icon as={FaCheck} />
                    </Box>

                    <Text fontWeight={600}>{skill}</Text>
                  </Stack>
                ))}
              </SimpleGrid>
            </Container>
          </Box>
        </Stack>
      </Container>
    </Layout>
  );
};

export default AboutMe;
