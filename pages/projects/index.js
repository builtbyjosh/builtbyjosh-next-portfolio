import React from "react";
import ProjectCard from "../../components/ProjectCard";
import { projectsList } from "../../data/projectList";
import Layout from "../../components/Layout";
import { Container } from "@chakra-ui/layout";

const Projects = () => {
  return (
    <Layout heading={"Some of My Work"}>
      <Container maxW={"2xl"} p={2}>
        {projectsList.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Container>
    </Layout>
  );
};

export default Projects;
