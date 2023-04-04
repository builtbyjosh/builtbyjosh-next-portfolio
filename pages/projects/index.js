import { useState, useEffect } from "react";
import ProjectCard from "../../components/ProjectCard";
import Layout from "../../components/Layout";
import { Container } from "@chakra-ui/layout";
import { getAllProjects } from "../api/projects";
import Link from "next/link";
const Projects = ({ projects }) => {
  console.log("server side projects: ", projects);
  const uid = "FDE07duGO94qyYEMFxjs";
  return (
    <Layout heading={"Some of My Work"}>
      <Link href={`projects/${uid}`}>ID</Link>
      <Container maxW={"2xl"} p={2}>
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

// const [projects, setProjects] = useState([]);
// useEffect(() => {
//   const fetchData = async () => {
//     const fetchedProjects = await getAllProjects();
//     setProjects(fetchedProjects);
//   };

//   fetchData();
// }, []);
