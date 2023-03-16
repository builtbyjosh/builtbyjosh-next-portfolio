import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from 'react-icons/bs';
import { MdEmail, MdOutlineEmail } from 'react-icons/md';
import SocialIcons from '../../components/SocialIcons';

const ContactMe = () => {
  const { hasCopied, onCopy } = useClipboard('joshuacollins912@gmail.com');

  return (
    <Flex
      align="center"
      justify="center"      
      id="contact">
      <Box        
        m={{ base: 5, md: 12, lg: 6 }}
        p={{ base: 5, lg: 12 }}>
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 10 }}>
            <Heading
              fontSize={{
                base: '4xl',
                md: '5xl',
              }}>
              Get in Touch
            </Heading>

            <Stack
              spacing={{ base: 4, md: 8, lg: 10 }}
              direction={{ base: 'column', md: 'row' }}>

              <SocialIcons/>

              <Box
                bg={'neutral.100'}
                borderRadius="lg"
                p={8}                
                shadow="base">
                <VStack spacing={5} textColor={'secondary.800'}>
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>
                    <InputGroup borderColor={'secondary.900'}>
                      <InputLeftElement>{<BsPerson />}</InputLeftElement>
                      <Input type="text" name="name" placeholder="Your Name" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <InputGroup borderColor={'secondary.900'}>
                      <InputLeftElement>{<MdOutlineEmail />}</InputLeftElement>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      resize="none"
                      borderColor={'secondary.900'}
                    />
                  </FormControl>

                  <Button                    
                    bg="primary.100"                    
                    _hover={{
                      bg: 'primary.default',
                    }}
                    isFullWidth>
                    Send Message
                  </Button>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  )
}

export default ContactMe
