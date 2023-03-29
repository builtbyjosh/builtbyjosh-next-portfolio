import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { auth } from "../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import useAuth from "../../hooks/useAuth";
import { Button, VStack } from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

import FormInput from "../FormInput";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      signInWithEmailAndPassword(auth, data.email, data.password)
        .then((res) => {
          const user = res.user;
          console.log("signed in: ", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode, errorMessage);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ email: "", password: "" });
    }
  }, [formState, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack textColor={"primary.500"} spacing={5}>
        <FormInput
          icon={<MdOutlineEmail />}
          name={"Email"}
          errors={errors.email}
          register={register}
          type={"email"}
        />

        <FormInput
          icon={<BsPerson />}
          name={"Password"}
          type={"password"}
          errors={errors.password}
          register={register}
        />

        <Button
          bg="primary.100"
          _hover={{
            bg: "primary.default",
          }}
          type={"submit"}
        >
          Login
        </Button>
      </VStack>
    </form>
  );
};

export default LoginForm;
