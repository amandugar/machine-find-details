import { Box, Heading, Stack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { Textarea } from "@chakra-ui/textarea";
import { Button } from "@chakra-ui/button";
const Feedback = () => {
  return (
    <Box width="100%" position="relative" minHeight="100vh" bg="#2b2b2b">
      <Box padding="16">
        <Box margin="auto">
          <Box paddingY={6}>
            <Image
              display="inline-block"
              src="https://auto.pwa.xane.ai/static/media/xane.3d9226e9.png"
              height="70px"
              width="70px"
            />
          </Box>
        </Box>
        <Box paddingY="5" width="100%">
          <Heading as="h1" color="white" textAlign="center">
            Help Improving Us..!!
          </Heading>
        </Box>
        <Box>
          <Stack spacing={4} width="full">
            <Input placeholder="Email" bg="white" />
            <Textarea maxHeight="16" placeholder="Feedback" bg="white" />
            <Box width="full">
              <Button marginX="auto" width="20" color="#fff" bg="#6666ff">
                Submit
              </Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Feedback;
