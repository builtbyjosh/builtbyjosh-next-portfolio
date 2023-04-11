import { useContext, useState } from "react";
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
import LoadingContext from "../../hooks/LoadingContext";
import EditForm from "./EditForm";

const ProjectListItem = ({ project }) => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const { refreshProjects } = useContext(LoadingContext);
  const { title, link, uid } = project;
  const handleProjectDelete = async (uid) => {
    if (confirm("Are you sure you wanna delete this todo?")) {
      deleteProject(uid);
    }
    refreshProjects();
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
            bg={"primary.500"}
            color={"secondary.100"}
            onClick={() => handleProjectDelete(uid)}
            _hover={{ bg: "black" }}
          />
          <IconButton
            icon={<FaEdit />}
            onClick={toggleOpen}
            bg={"primary.500"}
            color={"secondary.100"}
            _hover={{ bg: "black" }}
          />
        </Stack>
      </Stack>

      {isOpen && (
        <Box>
          <Text fontWeight={"bold"} mb={2}>
            Edit Project
          </Text>
          <EditForm project={project} toggleOpen={toggleOpen} />
        </Box>
      )}
    </Stack>
  );
};

export default ProjectListItem;
