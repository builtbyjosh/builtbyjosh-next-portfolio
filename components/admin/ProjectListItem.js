import { useState } from "react";
import {
  Stack,
  Text,
  IconButton,
  Box,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { deleteProject } from "../../pages/api/projects";
import EditProject from "./EditProject";

const ProjectListItem = ({ project, setIsLoading }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { title, desc, technologies, link, createdAt, uid } = project;
  const handleProjectDelete = async (uid) => {
    if (confirm("Are you sure you wanna delete this todo?")) {
      setIsLoading(true);
      deleteProject(uid);
      setIsLoading(false);
    }
  };

  return (
    <Stack w="100%" p={2} alignItems="center" border="1px" rounded="md">
      <Stack direction={"row"} w={"100%"} justifyContent={"space-between"}>
        <Box>
          <Link href={link} isExternal fontWeight="bold" fontSize="lg">
            {title}
          </Link>
          <Text fontWeight="medium" fontSize="sm">
            UID: {uid}
          </Text>
        </Box>

        <Stack spacing={2} direction="row" alignItems="center">
          <IconButton
            icon={<FaTrash />}
            onClick={() => handleProjectDelete(uid)}
          />
          <IconButton icon={<FaEdit />} onClick={onOpen} />
        </Stack>
      </Stack>
      <EditProject
        project={project}
        isOpen={isOpen}
        onClose={onClose}
        setIsLoading={setIsLoading}
      />
    </Stack>
  );
};

export default ProjectListItem;
