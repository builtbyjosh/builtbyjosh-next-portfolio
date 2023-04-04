import { Box, Heading, Link, Stack } from "@chakra-ui/react";
import LoginForm from "../../components/admin/LoginForm";
import { auth } from "../../firebase/config";
import useAuth from "../../hooks/useAuth";
import PageIcons from "../../components/PageIcons";
import ProjectList from "../../components/admin/ProjectList";
import AddNewProject from "../../components/admin/AddNewProject";
import LoadingContext from "../../hooks/LoadingContext";
import { getAllProjects } from "../api/projects";
import { useRouter } from "next/router";

const Auth = ({ projects }) => {
  const { isLoggedIn, user } = useAuth();
  const router = useRouter();
  const refreshProjects = () => {
    router.replace(router.asPath);
  };

  return (
    <LoadingContext.Provider value={{ refreshProjects }}>
      <Stack align={"center"} justify={"center"}>
        <Heading my={5} fontSize={"5xl"}>
          {isLoggedIn ? "Admin Panel" : "Log In"}
        </Heading>
        {!isLoggedIn && <LoginForm />}
        {isLoggedIn && (
          <>
            <Stack direction={{ base: "column", md: "row" }} spacing={5}>
              <Box display={"flex"}>
                <Stack direction={{ base: "column", md: "row" }} spacing={5}>
                  <PageIcons />
                  <Box>
                    <ProjectList projects={projects} />
                  </Box>
                </Stack>
              </Box>
              <AddNewProject />
            </Stack>

            <Link color="red.500" onClick={() => auth.signOut()}>
              Logout
            </Link>
          </>
        )}
      </Stack>
    </LoadingContext.Provider>
  );
};
export default Auth;

export async function getServerSideProps() {
  const projects = await getAllProjects();
  return { props: { projects } };
}
