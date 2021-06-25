import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ImCamera } from "react-icons/im/index";
import { BiMicrophone, BiChat } from "react-icons/bi/index";

const Home = () => {
  return (
    <Box bg="#2B2B2B" width={"100%"} height={"100vh"} position="relative">
      <Flex
        height="100vh"
        marginY="auto"
        direction="column"
        alignItems="center"
        justifyItems={"center"}
      >
        <Box margin="auto">
          <Box paddingY={6}>
            <Image
              display="inline-block"
              src="https://auto.pwa.xane.ai/static/media/xane.3d9226e9.png"
              height="100px"
              width="100px"
            />
          </Box>
          <Box margin="auto" paddingY={6}>
            <Heading as="h1" paddingX={10} paddingY={4} color="white">
              Wondering about a Part in a machine or a Device?
            </Heading>
            <Heading
              as="h5"
              paddingX={10}
              paddingY={4}
              fontSize="large"
              color="white"
            >
              We may Assist You..!!
            </Heading>
          </Box>
          <Box marginY={"auto"} paddingY={6}>
            <Link to="/camera">
              <ImCamera color="#6666FF" size={50} />
            </Link>
          </Box>
        </Box>
      </Flex>
      <Box position="absolute" bottom="20" width="100%">
        <Box position="absolute" left={10}>
          <Link to="/microphone">
            <BiMicrophone color="#6666FF" size={40} />
          </Link>
        </Box>
        <Box position="absolute" right={10}>
          <Link to="/chat">
            <BiChat color="#6666FF" size={40} />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
