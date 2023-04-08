import Layout from "../../components/Layout";
import { Container, Stack, Text, Tag, Heading, Link } from "@chakra-ui/react";
import { getAllProjects, getProjectById } from "../api/projects";

const ProjectPage = ({ projectData }) => {
  const { title, desc, link, technologies } = projectData;

  return (
    <Layout heading={"Project Details"}>
      <Container maxW={"2xl"} p={2}>
        <Stack spacing={4}>
          <Heading size={"lg"}>{title}</Heading>
          <Stack direction={"row"} spacing="1">
            {technologies.map((tech, index) => (
              <Tag p={1} key={index} size="sm" bg={"primary.200"}>
                {tech}
              </Tag>
            ))}
          </Stack>
          <Text lineHeight="taller">{desc}</Text>
          <Link isExternal href={link} color={"primary.500"}>
            Github Repo
          </Link>
        </Stack>
      </Container>
    </Layout>
  );
};

export default ProjectPage;

export async function getServerSideProps({ params: { uid } }) {
  const projectData = await getProjectById(uid);
  return { props: { projectData: projectData } };
}
