import { Stack, Text, IconButton, Box, Link } from "@chakra-ui/react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { deleteProject } from "../../pages/api/projects";

const ProjectListItem = ({ project, refreshData }) => {
  const { title, desc, technologies, link, createdAt, uid } = project;
  const handleProjectDelete = async (uid) => {
    if (confirm("Are you sure you wanna delete this todo?")) {
      deleteProject(uid);
      refreshData();
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
          <IconButton icon={<FaEdit />} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProjectListItem;
