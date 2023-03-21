import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  useToast,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import FormErrorMsg from "./FormErrorMsg";
import FormInput from "./FormInput";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  const toast = useToast();

  const onSubmit = async (data) => {
    console.log("data:", data);
    try {
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: data.email,
          name: data.name,
          subject: `New Message from: ${data.name}`,
          message: data.message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      toast({
        position: "top",
        title: "Message Sent!",
        description: "Thanks for reaching out! I will get back soon!",
        status: "success",
        duration: 5000,
        isClosable: true,
        variant: "top-accent",
      });
    } catch (error) {
      console.error(error);
      toast({
        position: "top",
        title: "Something Went Wrong",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
        variant: "top-accent",
      });
    }
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ name: "", email: "", message: "" });
    }
  }, [formState, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box p={8}>
        <VStack textColor={"secondary.800"}>
          <FormInput
            icon={<BsPerson />}
            name={"Name"}
            errors={errors.name}
            register={register}
          />

          <FormInput
            icon={<BsPerson />}
            name={"Email"}
            type={"email"}
            errors={errors.email}
            register={register}
          />

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
