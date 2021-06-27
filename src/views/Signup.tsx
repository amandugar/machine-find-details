import { Box, Heading, Flex, Button, Stack } from "@chakra-ui/react";
import { Input } from "@chakra-ui/input";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Box paddingY="10" minWidth="100%" minHeight="100vh" bg="#2b2b2b">
      <Box paddingY="16">
        <Heading as="h1" color="white">
          Signup
        </Heading>
      </Box>
      <Box width="90%" marginX="auto" paddingY="2">
        <Flex
          width="100%"
          flexDirection="column"
          alignItems="center"
          justify="center"
          marginX="auto"
        >
          <Stack spacing={5}>
            <Input marginX="auto" placeholder="Name" bg="white" width="100%" />
            <Input marginX="auto" placeholder="Email" bg="white" width="100%" />
            <Input
              marginX="auto"
              placeholder="Username"
              bg="white"
              width="100%"
            />
            <Input
              marginX="auto"
              placeholder="Password"
              bg="white"
              width="100%"
            />
            <Flex
              width="100%"
              flexDirection="row"
              alignItems="center"
              justify="center"
              marginX="auto"
            >
              <Link to="/login">
                <Button bg="blue.600" color="white" marginX="8" width="5.5rem">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button bg="blue.600" color="white" marginX="8" width="5.5rem">
                  Signup
                </Button>
              </Link>
            </Flex>
          </Stack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Signup;
