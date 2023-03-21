import React from "react";
import { IconButton } from "@chakra-ui/react";
import Link from "next/link";

const PageLink = ({ href, icon }) => {
  return (
    <Link href={href}>
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

export default PageLink;
