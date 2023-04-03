import { useState, useEffect } from "react";
import { Box, Heading, Link, Stack } from "@chakra-ui/react";
import LoginForm from "../../components/admin/LoginForm";
import { auth } from "../../firebase/config";
import useAuth from "../../hooks/useAuth";
import PageIcons from "../../components/PageIcons";
import ProjectList from "../../components/admin/ProjectList";
import AddNewProject from "../../components/admin/AddNewProject";
import LoadingContext from "../../hooks/LoadingContext";
import { getAllProjects } from "../api/projects";

const Auth = () => {
  const { isLoggedIn, user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProjects = await getAllProjects();
      setProjects(fetchedProjects);
    };

    fetchData();
  }, [isLoading]);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
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
