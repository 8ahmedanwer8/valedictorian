import {
  Heading,
  Text,
  Box,
  FormControl,
  Input,
  InputRightElement,
  FormLabel,
  VStack,
  InputGroup,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { useState } from "react";
import "../App.css";
import { FcGoogle } from "react-icons/fc";

function Signup() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const submitHandler = () => {
    console.log("submitting with these credentials");
    console.log(name, email, password, confirmPassword);
  };
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
          <FormControl id="name">
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
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
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
            <InputGroup>
              <Input
                type={show ? "text" : "password"}
                fontFamily="Inter"
                fontWeight="400"
                fontSize="20px"
                bgColor="#FFF7F4"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                _placeholder={{ color: "black", opacity: "50%" }}
              ></Input>
              <InputRightElement>
                <Button p="4" mr="2" size="sm" onClick={handleShow}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
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
            <InputGroup>
              <Input
                type={show ? "text" : "password"}
                fontFamily="Inter"
                fontWeight="400"
                fontSize="20px"
                bgColor="#FFF7F4"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                _placeholder={{ color: "black", opacity: "50%" }}
              ></Input>
              <InputRightElement>
                <Button p="4" mr="2" size="sm" onClick={handleShow}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
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
            bg: "#ba2222",
          }}
          onClick={submitHandler}
        >
          Create account
        </Button>
      </VStack>
    </Box>
  );
}

export default Signup;
