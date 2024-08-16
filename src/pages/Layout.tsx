import { Box } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
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
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
