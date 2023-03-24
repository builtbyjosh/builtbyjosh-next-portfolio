import ContactForm from "../../components/ContactForm";
import Layout from "../../components/Layout";
import { Container, Divider, Text } from "@chakra-ui/layout";

const ContactMe = () => {
  return (
    <Layout heading={"Get in Touch"}>
      <Container maxW="2xl" p={2}>
        <Text textColor={"primary.500"}>
          Please feel free to reach out if you have any questions for me or if
          you would like to discuss helping you create a website
        </Text>
        <Divider
          my={5}
          orientation="horizontal"
          borderColor={"secondary.900"}
        />
        <ContactForm />
      </Container>
    </Layout>
  );
};

export default ContactMe;
