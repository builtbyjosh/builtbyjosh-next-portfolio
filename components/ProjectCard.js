import React from "react";
import {
  Container,
  Stack,
  Text,
  Tag,
  Link,
  Image,
  Box,
} from "@chakra-ui/react";

const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const { id, title, desc, logo, link, technologies } = project;
  return (
    <Container maxW="2xl" p={2}>
      <Stack direction={"column"} spacing={4}>
        <Box onClick={toggleOpen} key={id}>
          <Stack
            direction={"row"}
            p={4}
            rounded="2xl"
            borderWidth="1px"
            w="100%"
            h="100%"
            textAlign="left"
            align="start"
            spacing={4}
            cursor="pointer"
            _hover={{ shadow: "lg" }}
          >
            <Image
              src={logo}
              size="sm"
              width={33}
              height={33}
              layout="fixed"
              rounded="md"
              objectFit="cover"
              alt="cover image"
              fallbackSrc="https://via.placeholder.com/150"
            />
            <Stack direction={"column"} align="start" justify="flex-start">
              <Stack direction={"column"} spacing={0} align="start">
                <Stack direction={"row"}>
                  <Text
                    as={Link}
                    href={link}
                    fontWeight="bold"
                    noOfLines={1}
                    onClick={(e) => e.stopPropagation()}
                    isExternal
                  >
                    {title}
                  </Text>
                  <Stack direction={"row"} spacing="1">
                    {technologies.map((tech, index) => (
                      <Tag key={index} size="sm" colorScheme="gray">
                        {tech}
                      </Tag>
                    ))}
                  </Stack>
                </Stack>

                {!isOpen && (
                  <Text fontSize="sm" noOfLines={{ base: 2 }}>
                    {desc}
                  </Text>
                )}

                {isOpen && <Text fontSize="sm">{desc}</Text>}
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default ProjectCard;
