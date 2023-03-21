import React from "react";
import { IconButton, Link } from "@chakra-ui/react";

const SocialLink = ({ href, icon }) => {
  return (
    <Link href={href} isExternal>
      <IconButton
        aria-label="github"
        variant="ghost"
        size="lg"
        fontSize="3xl"
        icon={icon}
        color={"primary.200"}
        _hover={{
          bg: "primary.default",
          color: "white",
        }}
        isRound
      />
    </Link>
  );
};

export default SocialLink;
