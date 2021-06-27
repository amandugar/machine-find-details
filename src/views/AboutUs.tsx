import { Box, Heading, Text } from "@chakra-ui/react";

const AboutUs = () => {
  return (
    <Box paddingY="10" minHeight="100vh" bg="#2b2b2b">
      <Box paddingY="16">
        <Heading as="h1" color="white">
          About Us
        </Heading>
      </Box>
      <Box paddingY="2">
        <Text textAlign="justify" paddingX="10%" color="white" fontSize="large">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, beatae
          quidem alias inventore corrupti illo quo sed in accusamus et cum
          aliquam enim maiores, architecto obcaecati mollitia, distinctio quasi?
          Quis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          blanditiis voluptatibus et nihil nesciunt, ea quia non voluptatum
          maiores fugit molestiae? Totam voluptas consequuntur in ducimus
          dolorum architecto quidem tempora! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Enim modi fugit praesentium odit unde
          provident vel ullam ipsam quae velit sequi pariatur minima fugiat iure
          blanditiis voluptatibus et nihil nesciunt, ea quia non voluptatum
          obcaecati, aut repellat dolore quod? obcaecati, aut repellat dolore
          quod? obcaecati, aut repellat dolore quod? obcaecati, aut repellat
          dolore quod?
        </Text>
      </Box>
    </Box>
  );
};

export default AboutUs;
