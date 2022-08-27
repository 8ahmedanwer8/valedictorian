import logo from "../Pages/logo.svg";
import topWave from "../Pages/top2.svg";
import { Box, Flex, Text, Image, Spacer, Center } from "@chakra-ui/react";
import "../App.css";
import SearchBar from "./SearchBar.js";
import data from "../Pages/data.json";

function Navbar({ type }) {
  if (type == 0) {
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
  if (type == 1) {
    return (
      //maybe use hstack here also boxes are letting the items escape out ofthem
      <Box width="100%" px="60" bgColor="#D03E3E" h="fit-content">
        <Flex>
          <Image width="calc(40vw)" position="absolute" src={logo}></Image>
          <Spacer />
          <Box w="70%">
            <SearchBar placeholder="Search a different program" data={data} />
          </Box>
          <Spacer />
          <Center>
            <Text
              p="4"
              fontFamily="Spline Sans"
              textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              color="#FFF7F4"
              fontSize="24px" //need to set breakpoints
              fontWeight="600"
            >
              Log in
            </Text>
          </Center>
        </Flex>
      </Box>
    );
  }
}

export default Navbar;
