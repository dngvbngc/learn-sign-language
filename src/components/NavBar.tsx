import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import ColorModeButton from "./ColorModeButton";

const NavBar = () => {
  return (
    <HStack
      padding='10px'
      backgroundColor='brand.100'
      justifyContent='space-between'
    >
      <HStack>
        <Link to='/'>
          <Image src={logo} boxSize='30px' objectFit='cover' />
        </Link>
        <Link to='/'>
          <Text
            paddingLeft={2}
            fontWeight='bold'
            fontSize='x-large'
            color='black'
          >
            Signopsys
          </Text>
        </Link>
      </HStack>
      <HStack spacing={4} paddingRight={2}>
        <Link to='/reading'>
          <Text fontWeight='semibold' fontSize='large' color='black'>
            Reading
          </Text>
        </Link>
        <Link to='/reading'>
          <Text fontWeight='semibold' fontSize='large' color='black'>
            Signing
          </Text>
        </Link>
        <ColorModeButton />
      </HStack>
    </HStack>
  );
};

export default NavBar;
