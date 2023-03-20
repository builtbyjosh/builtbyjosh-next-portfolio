import React from "react";
import { Stack, Tooltip } from "@chakra-ui/react";
import {
  BsHouseFill,
  BsFolderFill,
  BsPersonFill,
  BsFillEnvelopeFill,
} from "react-icons/bs";
import IconLink from "./IconLink";

const PageIcons = () => {
  return (
    <Stack
      align="center"
      justify="space-around"
      direction={{ base: "row", md: "column" }}
      maxH={"400px"}
    >
      <Tooltip label={"Home"} hasArrow shouldWrapChildren>
        <IconLink href={"/"} icon={<BsHouseFill size="28px" />} />
      </Tooltip>
      <Tooltip label={"About"} hasArrow shouldWrapChildren>
        <IconLink href={"/about"} icon={<BsPersonFill />} />
      </Tooltip>
      <Tooltip label={"Projects"} hasArrow shouldWrapChildren>
        <IconLink href={"/projects"} icon={<BsFolderFill />} />
      </Tooltip>
      <Tooltip label={"Contact"} hasArrow shouldWrapChildren>
        <IconLink href={"/contact"} icon={<BsFillEnvelopeFill />} />
      </Tooltip>
    </Stack>
  );
};

export default PageIcons;
