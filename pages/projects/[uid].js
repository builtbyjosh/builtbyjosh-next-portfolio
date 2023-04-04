import Layout from "../../components/Layout";
import { Container, Stack, Text, Tag, Heading, Link } from "@chakra-ui/react";
import { getAllProjects, getProjectById } from "../api/projects";

const ProjectPage = ({ projectData }) => {
  const { title, desc, link, technologies } = projectData;

  return (
    <Layout heading={"Project Details"}>
      <Container maxW={"2xl"} p={2}>
        <Heading>{title}</Heading>
        <Stack direction={"row"} spacing="1">
          {technologies.map((tech, index) => (
            <Tag p={1} key={index} size="sm" bg={"primary.200"}>
              {tech}
            </Tag>
          ))}
        </Stack>
        <Text>{desc}</Text>
        <Link isExternal href={link}>
          Github Repo
        </Link>
      </Container>
    </Layout>
  );
};

export default ProjectPage;

export async function getStaticPaths() {
  const projects = await getAllProjects();
  const paths = projects.map((project) => ({
    params: { uid: project.uid },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params: { uid } }) {
  console.log("PROJECT ID:", uid);
  const projectData = await getProjectById(uid);
  console.log("fetched project", projectData);
  return { props: { projectData: projectData }, revalidate: 1 };
}
