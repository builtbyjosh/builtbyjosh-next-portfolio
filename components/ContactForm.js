import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import FormErrorMsg from "./FormErrorMsg";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log("formData: ", data);

    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        email: data.email,
        name: data.name,
        subject: "New Contact",
        message: data.message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
    console.log(data.name, data.email, "New Contact", data.message);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box bg={"neutral.100"} borderRadius="lg" p={8} shadow="base">
        <VStack textColor={"secondary.800"}>
          <FormLabel>Name</FormLabel>
          <InputGroup borderColor={errors.name ? "red.400" : "secondary.900"}>
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
          <InputGroup borderColor={errors.email ? "red.400" : "secondary.900"}>
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
  );
};

export default ContactForm;
