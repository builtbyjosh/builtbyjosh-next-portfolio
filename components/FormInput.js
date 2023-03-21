import {
  InputGroup,
  Input,
  InputLeftElement,
  FormLabel,
} from "@chakra-ui/react";
import { Fragment } from "react";
import FormErrorMsg from "./FormErrorMsg";

const FormInput = ({ name, type = "text", errors, register, icon }) => {
  return (
    <Fragment>
      <FormLabel>{name}</FormLabel>
      <InputGroup borderColor={errors ? "red.400" : "secondary.900"}>
        <InputLeftElement>{icon}</InputLeftElement>
        <Input
          type={type}
          name={name.toLowerCase()}
          {...register(`${name.toLowerCase()}`, { required: true })}
          placeholder="Your Name"
          aria-invalid={errors ? "true" : "false"}
        />
      </InputGroup>
      {errors?.type === "required" && (
        <FormErrorMsg msg={`${name} is required`} />
      )}
    </Fragment>
  );
};

export default FormInput;
