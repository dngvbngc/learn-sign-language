import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import funfacts from "../assets/funfacts.svg";

const HomePage = () => {
  return (
    <SimpleGrid
      padding={5}
      columns={{ base: 1, md: 2 }}
      spacing={5}
      textAlign='center'
    >
      <Box>
        <Heading padding={5} fontSize={{ base: "xxx-large", lg: "8vw" }}>
          Learn Sign Language!
        </Heading>
        <HStack justifyContent='center'>
          <Link to='/reading'>
            <Button>Learn Reading</Button>
          </Link>
          <Link to='/signing'>
            <Button>Learn Signing</Button>
          </Link>
        </HStack>
        <Text fontStyle='helvetica' fontSize='large' padding={5}>
          Practice reading ASL through interactive music games, and signing
          through your webcam. Your sign to sign!
        </Text>
        <Text fontSize='small'>@dngvbngc 2024. Github.</Text>
      </Box>
      <Box>
        <Image src={funfacts} maxHeight='75vh' />
      </Box>
    </SimpleGrid>
  );
};

export default HomePage;
