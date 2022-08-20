import React from "react";
import { Center, Heading, Text, Box, Spacer } from "@chakra-ui/react";

const InfoPanel = () => {
  return (
    <Box
      mx="8"
      my="8"
      p="8"
      borderRadius="50px"
      alignItems="flex-start"
      width="full"
      height="fit-content"
      bgColor="#444140"
    >
      <Box display="flex" alignItems="center">
        <Heading
          fontFamily="Spline Sans"
          color="#FFF7F4"
          fontSize="36px"
          fontWeight="700"
        >
          Mechatronics Engineering
        </Heading>
        <Spacer />
        <Heading
          fontFamily="Spline Sans"
          color="#FFF7F4"
          fontSize="24px"
          fontWeight="500"
        >
          McMaster University
        </Heading>
      </Box>
      <Box p="4">
        <Text
          fontFamily="Inter"
          color="#FFF7F4"
          textAlign="left"
          fontWeight="400"
          fontSize="20px"
          noOfLines={6}
        >
          Today's designers are faced with the task of combining elements of
          mechanics, electronics, embedded systems and digital signal
          processing, while coping with the miniaturization of components and
          use of prefabricated parts. The synthesis of different technologies is
          already included in modern precision engineering. Continuing
          developments in miniaturization and fabrication will provide further
          challenges for Mechatronics Engineers.
        </Text>
        <Text
          pt="2"
          color="#FFF7F4"
          fontFamily="Inter"
          opacity="50%"
          fontSize="20px"
          fontWeight="400"
        >
          Read more
        </Text>
      </Box>
    </Box>
  );
};

export default InfoPanel;
