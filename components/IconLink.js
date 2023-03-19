import React from "react";
import { Link, IconButton } from "@chakra-ui/react";

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
