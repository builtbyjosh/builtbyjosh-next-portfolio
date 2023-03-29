import { Box } from "@chakra-ui/layout";
import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import useAuth from "../hooks/useAuth";

const AddNewProject = () => {
  const { isLoggedIn, user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  return (
    <Box>
      <FormInput name={"Title"} errors={errors.title} register={register} />
      <FormInput
        name={"Description"}
        errors={errors.description}
        register={register}
      />
      <FormInput name={"Github"} errors={errors.github} register={register} />
      <FormInput
        name={"DemoUrl"}
        errors={errors.demoUrl}
        register={register}
        required={false}
      />
    </Box>
  );
};

export default AddNewProject;
