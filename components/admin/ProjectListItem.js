import { Stack, Text, IconButton, Box, Link } from "@chakra-ui/react";
import { FaTrash, FaEdit } from "react-icons/fa";

const ProjectListItem = ({ project }) => {
  const { title, desc, technologies, link, createdAt, uid } = project;

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
          <IconButton icon={<FaTrash />} />
          <IconButton icon={<FaEdit />} />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProjectListItem;
