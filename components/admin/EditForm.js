import { useContext } from "react";
import {
  FormLabel,
  Textarea,
  Button,
  Stack,
  Flex,
  Box,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import { updateProject } from "../../pages/api/projects";
import FormInput from "../FormInput";
import FormErrorMsg from "../FormErrorMsg";
import { useForm } from "react-hook-form";
import LoadingContext from "../../hooks/LoadingContext";

const EditForm = ({ project, toggleOpen }) => {
  const { refreshProjects } = useContext(LoadingContext);
  const { title, desc, technologies, link, createdAt, uid } = project;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleProjectUpdate = async (data) => {
    const technologiesArr = data.technologies.split(",");
    const project = {
      projectId: uid,
      title: data.title,
      desc: data.description,
      link: data.github,
      technologies: technologiesArr,
    };
    await updateProject(project);

    refreshProjects();
    toggleOpen();
  };
  return (
    <form onSubmit={handleSubmit(handleProjectUpdate)}>
      <Stack direction={{ base: "column", sm: "row" }}>
        <Stack spacing={0}>
          <FormInput
            name={"Title"}
            errors={errors.title}
            register={register}
            value={title}
          />
        </Stack>
        <Stack spacing={0}>
          <FormInput
            name={"Technologies"}
            errors={errors.technologies}
            register={register}
            required={true}
            value={technologies.join(",")}
          />
        </Stack>
      </Stack>
      <FormInput
        name={"Github"}
        errors={errors.github}
        register={register}
        value={link}
      />
      <FormLabel>Description</FormLabel>
      <Textarea
        id="description"
        name="description"
        {...register("description", { required: true })}
        placeholder="Description"
        _placeholder={{ color: "primary.500" }}
        rows={6}
        resize="none"
        borderColor={errors.description ? "red.400" : "primary.500"}
        aria-invalid={errors.description ? "true" : "false"}
        defaultValue={desc}
      />
      {errors.description?.type === "required" && (
        <FormErrorMsg msg={"Description is required"} />
      )}
      <Button
        type="submit"
        _hover={{ bg: "black" }}
        bg={"primary.500"}
        color={"secondary.100"}
        my={2}
      >
        Save
      </Button>
    </form>
  );
};

export default EditForm;
