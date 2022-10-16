import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Input,
  FormLabel,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { useDisclosure } from "@chakra-ui/react";
import LoginContext from "../Context/LoginContext";

function GoogleUsernameModal() {
  const [username, setUsername] = useState();
  const { enterGoogleUsername, setEnterGoogleUsername } =
    useContext(LoginContext);
  const toast = useToast();

  const closeModal = () => setEnterGoogleUsername(false);

  function handleUsername({ username }) {
    console.log(username);
    if (username.length == 0) {
      toast({
        title: "Username field empty",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
    console.log(4290);
  }

  return (
    <Modal isOpen={enterGoogleUsername} onClose={closeModal}>
      <ModalOverlay />
      <ModalContent
        fontFamily="Spline Sans"
        fontSize="40px"
        py="5px"
        color="#FFF7F4"
        fontWeight="600"
        bgColor="#444140"
      >
        <ModalHeader>Welcome to Valedictorian</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel
              fontFamily="Inter"
              color="#FFF7F4"
              fontWeight="400"
              fontSize="16px"
            >
              Enter your username
            </FormLabel>
            <Input
              fontFamily="Inter"
              fontWeight="400"
              fontSize="20px"
              color="#000"
              bgColor="#FFF7F4"
              placeholder="Ex: MITpogchamp420"
              onChange={(e) => setUsername(e.target.value)}
              _placeholder={{ color: "black", opacity: "50%" }}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            onClick={() => handleUsername({ username })}
            colorScheme="red"
            mr={3}
          >
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default GoogleUsernameModal;
