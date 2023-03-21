import React from "react";
import { Box, Text, Flex, VStack, Heading, Stack } from "@chakra-ui/react";

import Layout from "../../components/Layout";
const AboutMe = () => {
  return (
    <Layout heading={"A little about Me!"}>
      <Text>
        As a software engineer with experience in full-stack web development, I
        am passionate about creating innovative solutions that make a
        difference. I have a strong background in front-end development,
        specializing in building progressive web apps using modern technologies
        like React, TypeScript, and Cypress. Additionally, my knowledge of
        RESTful API, CRUD operations, and responsive web design enables me to
        create functional and user-friendly web applications. I am proficient in
        a wide range of building, testing, and version control tools like Git,
        MongoDB, Ruby, and Rails. I take pride in my ability to manage and lead
        a team of developers and am always excited to learn and stay up-to-date
        with emerging technologies. With my extensive experience and passion for
        software development, I am committed to delivering high-quality work
        that meets and exceeds the expectations of clients and end-users alike.
      </Text>
    </Layout>
  );
};

export default AboutMe;
