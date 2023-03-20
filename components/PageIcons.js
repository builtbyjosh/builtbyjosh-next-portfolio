import React from "react";
import { Stack, Tooltip } from "@chakra-ui/react";
import {
  BsHouseFill,
  BsFolderFill,
  BsPersonFill,
  BsFillEnvelopeFill,
} from "react-icons/bs";
import PageLink from "./PageLink";

const PageIcons = () => {
  return (
    <Stack
      align="center"
      justify="space-around"
      direction={{ base: "row", md: "column" }}
      maxH={"400px"}
    >
      <Tooltip label={"Home"} hasArrow shouldWrapChildren>
        <PageLink href={"/"} icon={<BsHouseFill size="28px" />} />
      </Tooltip>
      <Tooltip label={"About"} hasArrow shouldWrapChildren>
        <PageLink href={"/about"} icon={<BsPersonFill />} />
      </Tooltip>
      <Tooltip label={"Projects"} hasArrow shouldWrapChildren>
        <PageLink href={"/projects"} icon={<BsFolderFill />} />
      </Tooltip>
      <Tooltip label={"Contact"} hasArrow shouldWrapChildren>
        <PageLink href={"/contact"} icon={<BsFillEnvelopeFill />} />
      </Tooltip>
    </Stack>
  );
};

export default PageIcons;
