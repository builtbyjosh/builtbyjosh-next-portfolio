import React from "react";
import { Box, Text, Stack, SimpleGrid, Tag } from "@chakra-ui/react";

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
      <Stack
        transition={"ease-in"}
        textAlign={"left"}
        color={"primary.500"}
        spacing={5}
      >
        <Text>
          I first became intersted in Software development in 2018. I started
          working through freeCodeCamps learning modules and then moved onto
          Udemy courses.
        </Text>
        <Text>
          Fast forward a couple of years, I decided to attend the Flatiron
          Schools Software Engineering Coding Bootcamp. Shortly after completing
          my bootcamp, I landed my first role as a Frontend Developer. And had
          to quickly get up to speed working with TypeScript and Chakra-UI,
          neither of which I had ever worked with before.
        </Text>
        <Text>
          All of this has led me to become a seasoned React developer with
          experience in developing high-quality web applications. I am skilled
          in front-end development, including creating reusable UI components
          and integrating with back-end APIs. I am passionate about creating
          user-friendly and responsive interfaces that enhance the user
          experience.
        </Text>

        <Text>
          Here are some of the technologies I have been working with recently:
        </Text>
        <Box w={"100%"}>
          <SimpleGrid
            columns={{ base: 2, sm: 3 }}
            rows={{ base: 2, sm: 3 }}
            spacing={5}
          >
            {skillList.map((skill, index) => (
              <Text
                textAlign={"center"}
                key={index}
                size={"md"}
                bg={"primary.200"}
                border={"1px"}
                borderRadius={"lg"}
                // minW={{base: "150px",}}
              >
                {skill}
              </Text>
            ))}
          </SimpleGrid>
        </Box>
      </Stack>
    </Layout>
  );
};

export default AboutMe;
