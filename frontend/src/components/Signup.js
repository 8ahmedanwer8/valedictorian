import {
  Heading,
  Text,
  Box,
  FormControl,
  Input,
  FormLabel,
  VStack,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import "../App.css";
import { FcGoogle } from "react-icons/fc";

function Signup() {
  return (
    <Box width="25%" height="fit-content" spacing="10" bgColor="#FFA987">
      <VStack
        borderRadius="50px"
        width="100%"
        height="100%"
        py="10"
        px="10"
        bgColor="#444140"
      >
        <Heading
          fontFamily="Spline Sans"
          fontSize="40px"
          py="5px"
          color="#FFF7F4"
          fontWeight="600"
        >
          Sign up
        </Heading>
        <VStack spacing="4">
          <FormControl>
            <FormLabel
              fontFamily="Inter"
              color="#FFF7F4"
              fontWeight="400"
              fontSize="16px"
            >
              Name
            </FormLabel>
            <Input
              fontFamily="Inter"
              fontWeight="400"
              fontSize="20px"
              bgColor="#FFF7F4"
              placeholder="Name"
              _placeholder={{ color: "black", opacity: "50%" }}
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel
              fontFamily="Inter"
              color="#FFF7F4"
              fontWeight="400"
              fontSize="16px"
            >
              Email
            </FormLabel>
            <Input
              fontFamily="Inter"
              fontWeight="400"
              fontSize="20px"
              bgColor="#FFF7F4"
              placeholder="Email"
              _placeholder={{ color: "black", opacity: "50%" }}
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel
              fontFamily="Inter"
              color="#FFF7F4"
              fontWeight="400"
              fontSize="16px"
            >
              Password
            </FormLabel>
            <Input
              fontFamily="Inter"
              fontWeight="400"
              fontSize="20px"
              bgColor="#FFF7F4"
              placeholder="Password"
              _placeholder={{ color: "black", opacity: "50%" }}
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel
              fontFamily="Inter"
              color="#FFF7F4"
              fontWeight="400"
              fontSize="16px"
            >
              Confirm Password
            </FormLabel>
            <Input
              fontFamily="Inter"
              fontWeight="400"
              fontSize="20px"
              bgColor="#FFF7F4"
              placeholder="Confirm Password"
              _placeholder={{ color: "black", opacity: "50%" }}
            ></Input>
          </FormControl>
          <Box width="full">
            <Text
              fontFamily="Inter"
              fontWeight="400"
              fontSize="20px"
              color="#FFF7F4"
              opacity="50%"
              textAlign="right"
            >
              Forget Password
            </Text>
          </Box>
        </VStack>

        <Button
          width="90%"
          px="10"
          borderRadius="15px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          height="60px"
          fontSize="20px"
          fontFamily="Spline Sans"
          fontWeight="600"
          color="#FFF7F4"
          bgColor="#E54B4B"
          _hover={{ bg: "#cc3737" }}
          _active={{
            bg: "#000",
          }}
        >
          Create an account
        </Button>
      </VStack>
    </Box>
  );
}

export default Signup;
