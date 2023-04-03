import {
  Heading,
  Box,
  Spinner,
  VStack,
  Flex,
  Container,
} from "@chakra-ui/react";
import { useEffect, useState, createContext, useContext } from "react";
import ProjectListItem from "./ProjectListItem";
import { getAllProjects } from "../../pages/api/projects";
import LoadingContext from "../../hooks/LoadingContext";

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

  return (
    <LoadingContext.Provider value={{ setIsLoading }}>
      <Container minW={"2xl"}>
        {isLoading && <Spinner />}
        {!isLoading && (
          <Box bg={"neutral.100"} borderRadius="lg" p={8} shadow="base">
            <Heading mb={5}>Project List</Heading>
            <VStack spacing={2}>
              {projects.map((project) => (
                <ProjectListItem key={project.uid} project={project} />
              ))}
            </VStack>
          </Box>
        )}
      </Container>
    </LoadingContext.Provider>
  );
};

export default ProjectList;
