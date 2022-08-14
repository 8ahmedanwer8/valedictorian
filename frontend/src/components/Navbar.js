import logo from "../Pages/logo.svg";
import topWave from "../Pages/top2.svg";
import { Box, Text, Image, HStack } from "@chakra-ui/react";
import "../App.css";

function Navbar() {
  return (
    <Box width="100%">
      <Image width="100vw" objectFit="cover" src={topWave}></Image>
      <Image
        width="calc(60vw)"
        position="absolute"
        top="0"
        left="0"
        src={logo}
      ></Image>
      <Text
        fontFamily="Spline Sans"
        textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        color="#FFF7F4"
        fontSize="24px" //need to set breakpoints
        fontWeight="600"
        position="absolute"
        top="calc(8vh)"
        right="calc(8vw)"
      >
        Log in
      </Text>
    </Box>
  );
}

export default Navbar;
