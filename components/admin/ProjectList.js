import { Heading, Box, VStack, Container } from "@chakra-ui/react";
import ProjectListItem from "./ProjectListItem";

const ProjectList = ({ projects }) => {
  return (
    <Container minW={"2xl"}>
      <Box bg={"neutral.100"} borderRadius="lg" p={8} shadow="base">
        <Heading mb={5}>Project List</Heading>
        <VStack spacing={2}>
          {projects &&
            projects.map((project) => (
              <ProjectListItem key={project.uid} project={project} />
            ))}
        </VStack>
      </Box>
    </Container>
  );
};

export default ProjectList;
