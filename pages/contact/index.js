import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Flex,
  Text,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import SocialIcons from "../../components/SocialIcons";
import FormErrorMsg from "../../components/FormErrorMsg";

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm();

  const onSubmit = (data) => {
    // e.preventDefault();
    console.log("formData: ", data);
  };

  return (
    <Flex align="center" justify="center" id="contact">
      <Box m={{ base: 5, md: 12, lg: 6 }} p={{ base: 5, lg: 12 }}>
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 10 }}>
            <Heading
              fontSize={{
                base: "4xl",
                md: "5xl",
              }}
            >
              Get in Touch
            </Heading>

            <Stack
              spacing={{ base: 4, md: 8, lg: 10 }}
              direction={{ base: "column", md: "row" }}
            >
              <SocialIcons />
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box bg={"neutral.100"} borderRadius="lg" p={8} shadow="base">
                  <VStack textColor={"secondary.800"}>
                    <FormLabel>Name</FormLabel>
                    <InputGroup
                      borderColor={errors ? "red.400" : "secondary.900"}
                    >
                      <InputLeftElement>{<BsPerson />}</InputLeftElement>
                      <Input
                        type="text"
                        name="name"
                        {...register("name", { required: true })}
                        placeholder="Your Name"
                        aria-invalid={errors.name ? "true" : "false"}
                      />
                    </InputGroup>
                    {errors.name?.type === "required" && (
                      <FormErrorMsg msg={"Name is required"} />
                    )}

                    <FormLabel>Email</FormLabel>
                    <InputGroup
                      borderColor={errors.email ? "red.400" : "secondary.900"}
                    >
                      <InputLeftElement>{<MdOutlineEmail />}</InputLeftElement>
                      <Input
                        type="email"
                        name="email"
                        {...register("email", { required: true })}
                        placeholder="Your Email"
                        aria-invalid={errors.email ? "true" : "false"}
                      />
                    </InputGroup>
                    {errors.email?.type === "required" && (
                      <FormErrorMsg msg={"Email is required"} />
                    )}

                    <FormLabel>Message</FormLabel>
                    <Textarea
                      id="message"
                      name="message"
                      {...register("message", { required: true })}
                      placeholder="Your Message"
                      rows={6}
                      resize="none"
                      borderColor={errors.message ? "red.400" : "secondary.900"}
                      aria-invalid={errors.message ? "true" : "false"}
                    />
                    {errors.message?.type === "required" && (
                      <FormErrorMsg msg={"Message is required"} />
                    )}
                    <Button
                      bg="primary.100"
                      _hover={{
                        bg: "primary.default",
                      }}
                      type={"submit"}
                    >
                      Send Message
                    </Button>
                  </VStack>
                </Box>
              </form>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
};

export default ContactMe;
