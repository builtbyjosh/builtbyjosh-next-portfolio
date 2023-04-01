import { useState, useEffect } from "react";
import ProjectCard from "../../components/ProjectCard";
import { projectsList } from "../../data/projectList";
import Layout from "../../components/Layout";
import { Container } from "@chakra-ui/layout";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../../firebase/config";
import { getAllProjects } from "../api/projects";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const fetchedProjects = await getAllProjects();
      setProjects(fetchedProjects);
    };

    fetchData();
  }, []);

  console.log("projects: ", projects);
  return (
    <Layout heading={"Some of My Work"}>
      <Container maxW={"2xl"} p={2}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Container>
    </Layout>
  );
};

export default Projects;
