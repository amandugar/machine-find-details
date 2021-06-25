import { Box, Heading } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";

import { Button } from "@chakra-ui/button";

const SingleItem = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      padding={{ base: "0", md: 10 }}
      minWidth="100%"
      minHeight="100vh"
      bg="#2b2b2b"
    >
      <Box paddingY="16">
        <Heading as="h1" color="white">
          Device 1
        </Heading>
      </Box>
      <UnorderedList
        paddingX="5"
        spacing={5}
        textAlign="left"
        fontSize="xl"
        fontWeight="600"
        color="white"
      >
        <a onClick={onOpen}>
          <ListItem cursor="pointer">Lorem ipsum dolor sit amet</ListItem>
        </a>
        <a onClick={onOpen}>
          <ListItem cursor="pointer">Lorem ipsum dolor sit amet</ListItem>
        </a>
        <a onClick={onOpen}>
          <ListItem cursor="pointer">Lorem ipsum dolor sit amet</ListItem>
        </a>
        <a onClick={onOpen}>
          <ListItem cursor="pointer">Lorem ipsum dolor sit amet</ListItem>
        </a>
      </UnorderedList>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              flexFlow="column"
              alignItems="center"
              justifyItems="center"
              marginY="auto"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda quibusdam quia et veritatis provident. Ab suscipit
              expedita sequi natus quis, aliquam reiciendis illum quidem beatae
              eius, aliquid amet, commodi voluptates. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Harum, possimus est provident
              suscipit ea sit laboriosam ab aperiam necessitatibus reprehenderit
              laborum iste itaque magnam officiis incidunt doloremque doloribus
              quam commodi.
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default SingleItem;
