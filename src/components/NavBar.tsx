import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack padding='10px' backgroundColor='#ADD0B3'>
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
  );
};

export default NavBar;
