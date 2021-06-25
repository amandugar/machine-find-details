import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Heading,
  Flex,
  Image,
  Select,
} from "@chakra-ui/react";
import { State } from "../state";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/button";
const ImageResult = () => {
  const image = useSelector((state: State) => state.image);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box position="relative" width="100%" minHeight="100vh" bg="#2b2b2b">
      <Box padding="4">
        <Heading as="h3" color="white" fontSize="2xl">
          Identified as:-
        </Heading>
        <Heading as="h3" color="white" fontSize="2xl">
          Brand:-
        </Heading>
      </Box>
      <Flex
        flexFlow="column"
        margin="auto"
        alignItems="center"
        justifyItems="center"
      >
        <Box position="relative">
          <Image marginX="auto" height="100vh" src={image} />
          <Button top="20%" onClick={onOpen} left="40%" position="absolute">
            Item 1
          </Button>
        </Box>
        <Flex flexFlow="row" marginY="4">
          <Link to="/camera">
            <Button marginX="5">Try Again</Button>
          </Link>
          <Link to="/login">
            <Button marginX="5" onClick={onOpen}>
              Save Result
            </Button>
          </Link>
        </Flex>
      </Flex>
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

export default ImageResult;
