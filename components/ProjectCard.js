import { Container, Stack, Text, Tag, Box } from "@chakra-ui/react";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  const { uid, title, desc, link, technologies } = project;
  return (
    <Container maxW="2xl" p={2}>
      <Stack direction={"column"}>
        <Box key={uid}>
          <Stack
            p={4}
            rounded="lg"
            borderWidth="1px"
            borderColor={"secondary.600"}
            cursor="pointer"
            _hover={{ shadow: "lg" }}
          >
            <Stack direction={"column"} align="start" justify="flex-start">
              <Stack direction={"column"} spacing={2} align="start">
                <Stack direction={{ base: "column", md: "row" }} spacing={3}>
                  <Link
                    href={`projects/${uid}`}
                    fontWeight="bold"
                    fontSize={"lg"}
                    shallow
                  >
                    {title}
                  </Link>
                  <Stack direction={"row"} spacing="1">
                    {technologies.map((tech, index) => (
                      <Tag p={1} key={index} size="sm" bg={"primary.200"}>
                        {tech}
                      </Tag>
                    ))}
                  </Stack>
                </Stack>

                <Text fontSize="sm" color={"primary.500"} noOfLines={2}>
                  {desc}
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default ProjectCard;
