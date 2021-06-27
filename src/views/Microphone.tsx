import React from "react";
import { Box, Heading } from "@chakra-ui/layout";
import { BiMicrophone } from "react-icons/bi";

const Microphone = () => {
  return (
    <Box width="100%" position="relative" minHeight="100vh" bg="#2b2b2b">
      <Box padding="16">
        <Box paddingY="5" width="100%">
          <Heading as="h1" color="white" textAlign="center">
            Microphone
          </Heading>
        </Box>
      </Box>

      <Box width="100%" bottom="10" position="fixed">
        <Box marginX="auto">
          <Box
            padding="5"
            marginX="auto"
            rounded="full"
            bg="#6666ff"
            width="max-content"
          >
            <BiMicrophone color="white" size="2rem" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Microphone;
