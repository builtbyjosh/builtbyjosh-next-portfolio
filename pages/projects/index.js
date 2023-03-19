import React from "react";
import ProjectCard from "../../components/ProjectCard";
import { projectsList } from "../../data/projectList";
import Layout from "../../components/Layout";

const Projects = () => {
  return (
    <Layout heading={"Some of My Work"}>
      {projectsList.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </Layout>
  );
};

export default Projects;
