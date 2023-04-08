import ProjectCard from "../../components/ProjectCard";
import Layout from "../../components/Layout";
import { Container } from "@chakra-ui/layout";
import { getAllProjects } from "../api/projects";

const Projects = ({ projects }) => {
  return (
    <Layout heading={"Some of My Work"}>
      <Container maxW={"2xl"} p={0}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Container>
    </Layout>
  );
};

export default Projects;

export async function getServerSideProps() {
  const projects = await getAllProjects();
  return { props: { projects } };
}
