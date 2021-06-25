import { Box, Heading, Grid, extendTheme, Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/layout";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { Link } from "react-router-dom";

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});
const theme = extendTheme({ breakpoints });
const History = () => {
  return (
    <Box
      padding={{ base: "0", md: 10 }}
      minWidth="100%"
      minHeight="100vh"
      bg="#2b2b2b"
    >
      <Box paddingY="16">
        <Heading as="h1" color="white">
          History
        </Heading>
      </Box>
      <Grid
        overflow={{ base: "scroll", md: "unset" }}
        maxHeight={{ base: "80vh", md: "fit-content" }}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap={6}
      >
        <Link to="/single-item">
          <Box w="100%">
            <Image src="https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
            <Box w="100%" textAlign="center">
              <Text fontSize="2xl" paddingY="2" fontWeight="600" color="white">
                Device 1
              </Text>
            </Box>
          </Box>
        </Link>
        <Box w="100%">
          <Image src="https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
          <Box w="100%" textAlign="center">
            <Text fontSize="2xl" paddingY="2" fontWeight="600" color="white">
              Device 1
            </Text>
          </Box>
        </Box>
        <Box w="100%">
          <Image src="https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
          <Box w="100%" textAlign="center">
            <Text fontSize="2xl" paddingY="2" fontWeight="600" color="white">
              Device 1
            </Text>
          </Box>
        </Box>
        <Box w="100%">
          <Image src="https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
          <Box w="100%" textAlign="center">
            <Text fontSize="2xl" paddingY="2" fontWeight="600" color="white">
              Device 1
            </Text>
          </Box>
        </Box>
        <Box w="100%">
          <Image src="https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
          <Box w="100%" textAlign="center">
            <Text fontSize="2xl" paddingY="2" fontWeight="600" color="white">
              Device 1
            </Text>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default History;
