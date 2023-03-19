import React from "react";
import {
  Flex,
  Text,
  IconButton,
  Tooltip,
  useClipboard,
} from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import IconLink from "./IconLink";

const Footer = () => {
  const { hasCopied, onCopy } = useClipboard("joshuacollins912@gmail.com");
  return (
    <Flex
      w="full"
      alignItems="center"
      justifyContent="center"
      position={"fixed"}
      bottom={0}
      bg={"secondary.500"}
    >
      <Flex w="full" align="center" justify="space-between" px="6">
        <Text fontSize="lg" fontWeight="bold" color="primary.100">
          Built By Josh
        </Text>

        <Flex mx="-2">
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

          <IconLink
            href={"https://github.com/builtbyjosh"}
            icon={<BsGithub />}
            isExternal={true}
          />

          <IconLink
            href={"https://twitter.com/ThriftyCoder"}
            icon={<BsTwitter size="28px" />}
            isExternal={true}
          />
          <IconLink
            href={"https://www.linkedin.com/in/joshuajohncollins/"}
            icon={<BsLinkedin size="28px" />}
            isExternal={true}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
