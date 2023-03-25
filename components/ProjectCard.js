import { useState } from "react";
import { Container, Stack, Text, Tag, Link, Box } from "@chakra-ui/react";

const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const { id, title, desc, link, technologies } = project;
  return (
    <Container maxW="2xl" p={2}>
      <Stack direction={"column"}>
        <Box onClick={toggleOpen} key={id}>
          <Stack
            p={4}
            rounded="lg"
            borderWidth="1px"
            borderColor={"secondary.600"}
            cursor="pointer"
            _hover={{ shadow: "lg" }}
          >
            <Stack direction={"column"} align="start" justify="flex-start">
              <Stack direction={"column"} spacing={0} align="start">
                <Stack direction={{ base: "column", md: "row" }}>
                  <Link
                    href={link}
                    fontWeight="bold"
                    isExternal
                    fontSize={"lg"}
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

                {!isOpen && (
                  <Text
                    fontSize="sm"
                    color={"primary.500"}
                    noOfLines={{ base: 2 }}
                  >
                    {desc}
                  </Text>
                )}

                {isOpen && (
                  <Text fontSize="sm" color={"primary.500"}>
                    {desc}
                  </Text>
                )}
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default ProjectCard;
