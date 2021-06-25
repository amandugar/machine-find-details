import { FC } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  Box,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { DrawerCloseButton } from "@chakra-ui/modal";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/hooks";

const Navbar: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box position="fixed" zIndex={100} top="5" right="5">
        <Button
          colorScheme="transparent"
          _focus={{ outline: "none" }}
          onClick={onOpen}
        >
          <HamburgerIcon color="#6666FF" width="6" height="6" />
        </Button>
        <Drawer placement={"left"} onClose={onClose} isOpen={isOpen} size="xs">
          <DrawerOverlay />
          <DrawerContent bg="#2b2b2b">
            <DrawerCloseButton
              _focus={{ outline: "none" }}
              color="white"
              _hover={{ background: "white", color: "#000" }}
            />
            <DrawerHeader textAlign="center" borderBottomWidth="1px">
              <Box paddingY={6}>
                <Image
                  display="inline-block"
                  src="https://auto.pwa.xane.ai/static/media/xane.3d9226e9.png"
                  height="4rem"
                  width="4rem"
                />
              </Box>
            </DrawerHeader>
            <DrawerBody color="white" textAlign="center">
              <Box>
                <Link to="/">
                  <Text fontSize="20px" fontWeight="medium" padding="4">
                    Home
                  </Text>
                </Link>
                <Link to="/about-us">
                  <Text fontSize="20px" fontWeight="medium" padding="4">
                    About
                  </Text>
                </Link>
                <Link to="/feedback">
                  <Text fontSize="20px" fontWeight="medium" padding="4">
                    Feedback
                  </Text>
                </Link>
                <Link to="/contact-us">
                  <Text fontSize="20px" fontWeight="medium" padding="4">
                    Contact
                  </Text>
                </Link>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
