import { Box, Heading } from "@chakra-ui/react";

const ContactUs = () => {
  return (
    <Box width="100%" position="relative" minHeight="100vh" bg="#2b2b2b">
      <Box padding="16">
        <Box paddingY="5" width="100%">
          <Heading as="h1" color="white" textAlign="center">
            Contact Us
          </Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactUs;
