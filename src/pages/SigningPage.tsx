import { Box, Image, Text } from "@chakra-ui/react";
import inprogress from "../assets/inprogress.svg";

const SigningPage = () => {
  return (
    <Box padding={10}>
      <center>
        <Image maxWidth='35vw' align='center' src={inprogress} />
        <Text fontWeight='bold' padding={2}>
          Coming to you soon(ish)...
        </Text>
      </center>
    </Box>
  );
};

export default SigningPage;
