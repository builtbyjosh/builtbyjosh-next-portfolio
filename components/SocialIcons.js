import React from "react";
import {
  IconButton,
  Link,
  Stack,
  Tooltip,
  useClipboard,
} from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import SocialIconButton from "./SocialIconButton";

const SocialIcons = () => {
  const { hasCopied, onCopy } = useClipboard("joshuacollins912@gmail.com");
  return (
    <Stack
      align="center"
      justify="space-around"
      direction={{ base: "row", md: "column" }}
    >
      <Tooltip
        label={hasCopied ? "Email Copied!" : "Copy Email"}
        closeOnClick={false}
        hasArrow
      >
        <IconButton
          aria-label="email"
          variant="ghost"
          size="lg"
          fontSize="3xl"
          icon={<MdEmail />}
          color={"primary.100"}
          _hover={{
            bg: "primary.default",
            color: "white",
          }}
          onClick={onCopy}
          isRound
        />
      </Tooltip>

      <SocialIconButton
        href={"https://github.com/builtbyjosh"}
        icon={<BsGithub />}
        isExternal={true}
      />

      <SocialIconButton
        href={"https://twitter.com/ThriftyCoder"}
        icon={<BsTwitter size="28px" />}
        isExternal={true}
      />
      <SocialIconButton
        href={"https://www.linkedin.com/in/joshuajohncollins/"}
        icon={<BsLinkedin size="28px" />}
        isExternal={true}
      />
    </Stack>
  );
};

export default SocialIcons;
