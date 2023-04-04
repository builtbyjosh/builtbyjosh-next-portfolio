import { useContext } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { updateProject } from "../../pages/api/projects";
import FormInput from "../FormInput";
import { useForm } from "react-hook-form";
import LoadingContext from "../../hooks/LoadingContext";

const EditProject = ({ project, isOpen, onClose }) => {
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
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Project</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(handleProjectUpdate)}>
            <FormInput
              name={"Title"}
              errors={errors.title}
              register={register}
              value={title}
            />
            <FormInput
              name={"Description"}
              errors={errors.description}
              register={register}
              value={desc}
            />
            <FormInput
              name={"Github"}
              errors={errors.github}
              register={register}
              value={link}
            />
            <FormInput
              name={"Technologies"}
              errors={errors.technologies}
              register={register}
              required={true}
              value={technologies.join(",")}
            />
            <Button type="submit">Edit Project</Button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EditProject;
