import {
  Box,
  Heading,
  Container,
  Flex,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import LoginForm from "../../components/admin/LoginForm";
import { auth } from "../../firebase/config";
import useAuth from "../../hooks/useAuth";
import PageIcons from "../../components/PageIcons";
import ProjectList from "../../components/admin/ProjectList";
import AddNewProject from "../../components/admin/AddNewProject";

const Auth = () => {
  const { isLoggedIn, user } = useAuth();

  return (
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
                  <ProjectList />
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
  );
};
export default Auth;

// <Flex direction={"row"} w={"100%"}>
// <Stack flexGrow={3}>
//   <Flex
//     align="center"
//     justify="center"
//     pb={{ base: "120px", md: "20px" }}
//   >
//     <Box m={{ base: 5, md: 12, lg: 6 }} p={{ base: 5, lg: 12 }}>
//       <Stack direction={"column"} spacing={{ base: 4, md: 8, lg: 10 }}>
//         <Heading fontSize={"5xl"}>
//           {isLoggedIn ? "Admin Panel" : "Log In"}
//         </Heading>

//         <Stack
//           spacing={{ base: 4, md: 8, lg: 10 }}
//           direction={{ base: "column", md: "row" }}
//         >
//           <PageIcons />

//           <Box bg={"neutral.100"} borderRadius="lg" p={8} shadow="base">
//             <Stack direction={"column"} textColor={"secondary.800"}>
//               {isLoggedIn && (
//                 <Container maxW={"2xl"} p={2}>
//                   <Box>
//                     <Text color="green.500">{user.email}</Text>
//                     <Link color="red.500" onClick={() => auth.signOut()}>
//                       Logout
//                     </Link>
//                     <ProjectList />
//                   </Box>
//                 </Container>
//               )}
//             </Stack>
//           </Box>
//         </Stack>
//       </Stack>
//     </Box>
//     {!isLoggedIn && <LoginForm />}
//   </Flex>
// </Stack>
// <Stack pt={"95px"} flex="1">
//   <AddNewProject />
// </Stack>
// </Flex>
