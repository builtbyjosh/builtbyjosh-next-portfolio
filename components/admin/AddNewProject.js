import { useEffect } from "react";
import { useForm } from "react-hook-form";
import FormInput from "../FormInput";
import useAuth from "../../hooks/useAuth";
import { addProject } from "../../pages/api/projects";
import { Box, Button, VStack, Stack, Flex, Container } from "@chakra-ui/react";

const AddNewProject = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const handleProjectCreate = async (data) => {
    const technologiesArr = data.technologies.split(",");
    const project = {
      title: data.title,
      desc: data.description,
      link: data.github,
      technologies: technologiesArr,
    };
    await addProject(project);
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ title: "", description: "", github: "", technologies: "" });
    }
  }, [formState, reset]);

  return (
    <Container maxW={"2xl"}>
      <Box bg={"neutral.100"} borderRadius="lg" p={8} shadow="base">
        <form onSubmit={handleSubmit(handleProjectCreate)}>
          <FormInput name={"Title"} errors={errors.title} register={register} />
          <FormInput
            name={"Description"}
            errors={errors.description}
            register={register}
          />
          <FormInput
            name={"Github"}
            errors={errors.github}
            register={register}
          />
          <FormInput
            name={"Technologies"}
            errors={errors.technologies}
            register={register}
            required={true}
          />
          <Button type="submit">Add Project</Button>
        </form>
      </Box>
    </Container>
  );
};

export default AddNewProject;
