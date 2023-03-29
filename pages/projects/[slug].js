import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import {
  Container,
  Stack,
  Text,
  Tag,
  Box,
  Heading,
  Link,
} from "@chakra-ui/react";

const ProjectPage = () => {
  // const router = useRouter();
  // const data = router.query;
  // const {
  //   id,
  //   title,
  //   desc,
  //   link,
  //   technologies,
  //   thumb = null,
  //   demoURL = null,
  // } = data;

  return (
    <Layout heading={"Fix Later"}>
      <Container maxW={"2xl"} p={2}></Container>
    </Layout>
  );
};

export default ProjectPage;

// <Heading>Description:</Heading>
// <Text>{desc}</Text>
// <Heading>Tech Used:</Heading>
// {technologies.map((skill, index) => (
//   <Text key={index}>{skill}</Text>
// ))}
// {demoURL && (
//   <Link isExternal href={demoURL}>
//     Demo Link
//   </Link>
// )}
// <Link isExternal href={link}>
//   Github Repo
// </Link>
