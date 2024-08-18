import {
  Badge,
  Box,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Transcript } from "../entities/Transcript";
import { TimeIcon } from "@chakra-ui/icons";

interface Props {
  transcript: Transcript;
}

const GameCard = ({ transcript }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
      borderRadius={10}
      overflow='hidden'
    >
      <Card variant={colorMode === "light" ? "outline" : "filled"}>
        <Link to={`/reading/${transcript.id}`}>
          <img src={`games/${transcript.id}.jpg`} width='100%' />
        </Link>
        <CardBody>
          <Heading fontSize='2xl' marginBottom={2} textAlign='left'>
            <Link to={"/reading/" + transcript.id}>{transcript.name}</Link>
          </Heading>
          <HStack justifyContent='flex-end'>
            <Badge
              colorScheme='red'
              fontSize='14px'
              paddingX={2}
              borderRadius='4px'
              padding={1}
            >
              {transcript.artist}
            </Badge>
            <Badge
              colorScheme='yellow'
              fontSize='14px'
              paddingX={2}
              borderRadius='4px'
              padding={1}
            >
              {transcript.language}
            </Badge>
            <Badge
              colorScheme='brand'
              fontSize='14px'
              paddingX={2}
              borderRadius='4px'
              padding={1}
            >
              <TimeIcon marginTop={-1} />
              {"  "}
              {transcript.duration}
              <small>s</small>
            </Badge>
          </HStack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default GameCard;
