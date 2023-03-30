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

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getProjects = async () => {
    setIsLoading(true);
    const querySnapshot = await getDocs(collection(db, "project"));
    let projectsArr = [];

    querySnapshot.forEach((project) => {
      let projectObj = project.data();
      projectObj.uid = project.id;
      console.log("PROJECT OBJ: ", projectObj);
      projectsArr.push(projectObj);
    });
    setProjects(projectsArr);
    setIsLoading(false);
  };
  const refreshData = () => {
    getProjects();
  };
  useEffect(() => {
    getProjects();
  }, []);
  console.log(projects);
  return (
    <Container minW={"2xl"}>
      {isLoading && <Spinner />}
      {!isLoading && (
        <Box bg={"neutral.100"} borderRadius="lg" p={8} shadow="base">
          <Heading>Project List</Heading>
          <VStack spacing={2}>
            {projects.map((project) => (
              <ProjectListItem
                key={project.uid}
                project={project}
                refreshData={refreshData}
              />
            ))}
          </VStack>
        </Box>
      )}
    </Container>
  );
};

export default ProjectList;
