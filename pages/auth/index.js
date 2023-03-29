import { Box, Button, Container, Link, Text } from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FaGoogle, FaMoon, FaSun } from "react-icons/fa";
import LoginForm from "../../components/LoginForm";
import { auth } from "../../firebase/config";
import useAuth from "../../hooks/useAuth";
import Layout from "../../components/Layout";

const Auth = () => {
  const { isLoggedIn, user } = useAuth();
  const handleAuth = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };
  return (
    <Layout heading={"Log In"}>
      <Container maxW={"2xl"} p={2}>
        <Box
          border={"1px"}
          borderRadius={"2xl"}
          p={2}
          boxShadow={"lg"}
          top="5%"
          right="5%"
        >
          {isLoggedIn && (
            <Box>
              <Text color="green.500">{user.email}</Text>
              <Link color="red.500" onClick={() => auth.signOut()}>
                Logout
              </Link>
            </Box>
          )}
          {!isLoggedIn && <LoginForm />}
        </Box>
      </Container>
    </Layout>
  );
};
export default Auth;
