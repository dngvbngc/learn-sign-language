import { Box, Image, Text } from "@chakra-ui/react";
import error from "../assets/error.svg";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  return (
    <>
      <NavBar />
      <Box
        padding={5}
        alignContent='center'
        justifyContent='center'
        textAlign='center'
        alignItems='center'
      >
        <Box padding={10}>
          <center>
            <Image maxWidth='35vw' align='center' src={error} />
            <Text fontWeight='bold' padding={2}>
              This page does not exist, or something is wrong with our server.
            </Text>
          </center>
        </Box>
      </Box>
    </>
  );
};

export default ErrorPage;
