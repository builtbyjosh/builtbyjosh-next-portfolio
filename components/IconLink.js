import React from "react";
import { IconButton } from "@chakra-ui/react";
import Link from "next/link";

const IconLink = ({ href, icon, isExternal = false }) => {
  return (
    <Link href={href} isExternal={isExternal}>
      <IconButton
        aria-label="github"
        variant="ghost"
        size="lg"
        fontSize="3xl"
        icon={icon}
        color={"primary.100"}
        _hover={{
          bg: "primary.default",
          color: "white",
        }}
        isRound
      />
    </Link>
  );
};

export default IconLink;
