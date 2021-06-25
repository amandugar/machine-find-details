import { Box, Heading, Input } from "@chakra-ui/react";
import React from "react";
import { FiSend } from "react-icons/fi";
import { Center, Flex } from "@chakra-ui/layout";

const Chat = () => {
  return (
    <Box width="100%" position="relative" minHeight="100vh" bg="#2b2b2b">
      <Box padding="16">
        <Box paddingY="5" width="100%">
          <Heading as="h1" color="white" textAlign="center">
            Chat with Us
          </Heading>
        </Box>
      </Box>

      <Box
        width="100%"
        bottom="10"
        paddingX="5"
        marginY="auto"
        position="fixed"
      >
        <Box margin="auto">
          <Flex
            width="100%"
            flexFlow="row"
            marginY="auto"
            alignItems="start"
            justifyItems="start"
          >
            <Input marginX="2" bg={"white"} />
            <Box marginX="2" marginY="auto">
              <FiSend size="2rem" color="#6666FF" />
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Chat;
