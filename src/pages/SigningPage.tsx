import { useRef } from "react";
import Webcam from "react-webcam";
import { Center, Heading, Text } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";

const SigningPage = () => {
  const width = 50;
  const height = (width * 480) / 640;
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  return (
    <>
      <Heading paddingBottom={2} fontSize='xx-large'>
        Learn Signing
      </Heading>
      <Text paddingBottom={1} fontSize='small' fontWeight='light'>
        <InfoOutlineIcon marginRight={2} />
        Sign an alphabetical character in ASL with one hand!
      </Text>
      <Text color='red' paddingBottom={1} fontSize='small' fontWeight='light'>
        <InfoOutlineIcon marginRight={2} />
        Our live detection server is down! Please use this{" "}
        <a href='https://github.com/dngvbngc/sign-language-detection-flask'>
          <strong>local application</strong>
        </a>
        .
      </Text>
      <Center>
        <Webcam
          ref={webcamRef}
          style={{ width: `${width}vw`, height: `${height}vw` }}
        />
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            width: `${width}vw`,
            height: `${height}vw`,
          }}
        />
      </Center>
    </>
  );
};

export default SigningPage;
