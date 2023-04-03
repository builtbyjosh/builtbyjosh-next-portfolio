import {
  Heading,
  Box,
  Spinner,
  VStack,
  Flex,
  Container,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "../../firebase/config";
import { FaTrash } from "react-icons/fa";
import ProjectListItem from "./ProjectListItem";
import { getAllProjects } from "../../pages/api/projects";
const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProjects = await getAllProjects();
      setProjects(fetchedProjects);
    };

    fetchData();
  }, [isLoading]);
  console.log(projects);
  return (
    <Container minW={"2xl"}>
      {isLoading && <Spinner />}
      {!isLoading && (
        <Box bg={"neutral.100"} borderRadius="lg" p={8} shadow="base">
          <Heading mb={5}>Project List</Heading>
          <VStack spacing={2}>
            {projects.map((project) => (
              <ProjectListItem
                key={project.uid}
                project={project}
                setIsLoading={setIsLoading}
              />
            ))}
          </VStack>
        </Box>
      )}
    </Container>
  );
};

export default ProjectList;
