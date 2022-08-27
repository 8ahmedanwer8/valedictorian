import React from "react";
import {
  Container,
  Text,
  Box,
  Spacer,
  VStack,
  Center,
  Flex,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import data from "./data.json";

import Signup from "../components/Signup";
import TestNav from "../components/TestNav";

const Homepage = () => {
  return (
    <Container backgroundColor="#ffa987" p="0" h="fit-content" maxW="100%">
      <Navbar type="0"></Navbar>
      <Center>
        <Signup></Signup>
      </Center>
      <TestNav></TestNav>
    </Container>
  );
};

export default Homepage;
