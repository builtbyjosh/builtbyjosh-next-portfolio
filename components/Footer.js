import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import {
  BsHouseFill,
  BsFolderFill,
  BsPersonFill,
  BsFillEnvelopeFill,
} from "react-icons/bs";
import SocialIconButton from "./SocialIconButton";

const Footer = () => {
  return (
    <Flex
      w="full"
      alignItems="center"
      justifyContent="center"
      position={"absolute"}
      bottom={0}
    >
      <Flex
        w="full"
        flexDir={{
          base: "column",
          sm: "row",
        }}
        align="center"
        justify="space-between"
        px="6"
      >
        <Text fontSize="xl" fontWeight="bold" color="primary.100">
          Built By Josh
        </Text>

        <Text py={0} color="gray.800">
          All rights reserved
        </Text>

        <Flex mx="-2">
          <SocialIconButton href={"/"} icon={<BsHouseFill size="28px" />} />
          <SocialIconButton href={"/about"} icon={<BsPersonFill />} />
          <SocialIconButton href={"/projects"} icon={<BsFolderFill />} />
          <SocialIconButton href={"/contact"} icon={<BsFillEnvelopeFill />} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
