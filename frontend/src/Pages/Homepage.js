import React from "react";
import { Container, Text, Box, Spacer, VStack, Flex } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import "../App.css";

const Homepage = () => {
  return (
    <Container backgroundColor="#ffa987" p="0" h="100vh" maxW="100%">
      <Navbar></Navbar>
      <Flex h="100vh">
        <VStack
          px="40px"
          py="0"
          spacing="1px"
          alignItems="flex-start"
          width="full"
          height="full"
          bgColor="#FFA987"
        >
          <Text
            fontFamily="'Baloo 2'"
            fontSize="128px"
            ml="3rem"
            fontWeight="700"
          >
            Valedictorian
          </Text>
          <Box width="full">
            <Text
              fontFamily="Spline Sans"
              fontSize="32px"
              fontWeight="400"
              textAlign="center"
            >
              Read about university programs from the students
            </Text>
          </Box>
        </VStack>
        <Login></Login>
      </Flex>
    </Container>
  );
};

export default Homepage;
