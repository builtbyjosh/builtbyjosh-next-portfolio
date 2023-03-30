import {
  InputGroup,
  Input,
  InputLeftElement,
  FormLabel,
} from "@chakra-ui/react";
import FormErrorMsg from "./FormErrorMsg";

const FormInput = ({
  name,
  type = "text",
  errors,
  register,
  icon,
  required = true,
  value = null,
}) => {
  return (
    <>
      <FormLabel>{name}</FormLabel>
      <InputGroup borderColor={errors ? "red.400" : "primary.500"}>
        {icon && <InputLeftElement>{icon}</InputLeftElement>}
        <Input
          type={type}
          name={name.toLowerCase()}
          {...register(`${name.toLowerCase()}`, { required: true })}
          placeholder={`Your ${name}`}
          _placeholder={{ color: "primary.500" }}
          aria-invalid={errors ? "true" : "false"}
          defaultValue={value}
        />
      </InputGroup>
      {errors?.type === "required" && (
        <FormErrorMsg msg={`${name} is required`} />
      )}
    </>
  );
};

export default FormInput;
