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

      <Link href="https://github.com/builtbyjosh" isExternal>
        <IconButton
          aria-label="github"
          variant="ghost"
          size="lg"
          fontSize="3xl"
          icon={<BsGithub />}
          color={"primary.100"}
          _hover={{
            bg: "primary.default",
            color: "white",
          }}
          isRound
        />
      </Link>

      <Link href="https://twitter.com/ThriftyCoder" isExternal>
        <IconButton
          aria-label="twitter"
          variant="ghost"
          size="lg"
          icon={<BsTwitter size="28px" />}
          color={"primary.100"}
          _hover={{
            bg: "primary.default",
            color: "white",
          }}
          isRound
        />
      </Link>

      <Link href="https://www.linkedin.com/in/joshuajohncollins/" isExternal>
        <IconButton
          aria-label="linkedin"
          variant="ghost"
          size="lg"
          icon={<BsLinkedin size="28px" />}
          color={"primary.100"}
          _hover={{
            bg: "primary.default",
            color: "white",
          }}
          isRound
        />
      </Link>
    </Stack>
  );
};

export default SocialIcons;
