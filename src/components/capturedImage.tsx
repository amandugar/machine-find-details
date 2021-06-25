import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading } from "@chakra-ui/layout";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Select,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { State } from "../state";
import { Link } from "react-router-dom";

const CapturedImage = () => {
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
        <Image marginX="auto" height="100vh" src={image} />
        <Flex flexFlow="row" marginY="4">
          <Link to="/image-result">
            <Button marginX="5">Confirm</Button>
          </Link>
          <Button marginX="5" onClick={onOpen}>
            Change Brand
          </Button>
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
              <Select placeholder="Select option">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Link to="/feedback">
              <Button colorScheme="blue" mr={3}>
                Still not found
              </Button>
            </Link>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CapturedImage;
