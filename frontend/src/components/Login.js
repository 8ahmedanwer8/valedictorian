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

function Login() {
  return (
    <Box
      alignItems="flex-start"
      width="full"
      height="fit-content"
      spacing="10"
      px="28"
      py="20"
      bgColor="#FFA987"
    >
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
          Log in
        </Heading>
        <VStack spacing="6">
          <FormControl>
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
            <Input
              fontFamily="Inter"
              fontWeight="400"
              fontSize="20px"
              bgColor="#FFF7F4"
              placeholder="Password"
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

          <Button
            width="60%"
            px="10"
            borderRadius="15px"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            height="60px"
            fontSize="20px"
            fontFamily="Spline Sans"
            fontWeight="600"
            color="#FFF7F4"
            bgColor="#1E1E24"
            _hover={{ bg: "#000" }}
            _active={{
              bg: "#000",
            }}
          >
            Log in
          </Button>
          <Button
            leftIcon={<FcGoogle />}
            width="90%"
            px="30px"
            borderRadius="50px"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            height="60px"
            fontSize="20px"
            fontFamily="Spline Sans"
            fontWeight="600"
            color="#FFF7F4"
            bgColor="#1E1E24"
            _hover={{ bg: "#000" }}
            _active={{
              bg: "#000",
            }}
          >
            Continue with Google
          </Button>
        </VStack>
        <Text
          fontFamily="Inter"
          fontWeight="400"
          fontSize="20px"
          color="#FFF7F4"
          opacity="50%"
        >
          Don't have an account?
        </Text>
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
          _hover={{ bg: "#000" }}
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

export default Login;
