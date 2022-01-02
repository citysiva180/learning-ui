import React from "react";
import { Container, Box, Center } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Button,
} from "@chakra-ui/react";
import { useColorMode, toggleColorMode } from "@chakra-ui/react";

function HomePage() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Container maxW="container.lg">
        <br />
        <br />
        <header>
          <Button onClick={toggleColorMode}>
            Toggle {colorMode === "light" ? "Dark" : "Light"}
          </Button>
        </header>
        <br />
        <br />
        <h1>
          <strong>Chakra UI Notes</strong>
        </h1>
        <br />
        <br />
        <p>
          Chakra UI with react is a great combination to break free from cookie
          cutter templates. I have been using it now and I feel its awesome. For
          Layout, ensure to check out the container Component from Chakra UI.
          With this we could beautifully arrange our content on the webpage.
          Container layout has various options aspecting to the size of the
          container. You could check them out here
        </p>
        <br />
        <br />
        <h1>
          <strong>List Groups</strong>
        </h1>
        <br />
        <br />
        <OrderedList>
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
          <ListItem>Consectetur adipiscing elit</ListItem>
          <ListItem>Integer molestie lorem at massa</ListItem>
          <ListItem>Facilisis in pretium nisl aliquet</ListItem>
        </OrderedList>
        <br />
        <br />
        <h1>
          {" "}
          <strong>Centered Box</strong>
        </h1>
        <br />
        <br />
        <Container maxW="xl" centerContent>
          <Box padding="4" bg="cyan.100" maxW="3xl" color="black">
            This is a center element which is a child to the container element.
            Its max width is xl but still its centered and relatively small to
            the larger container. You could see that the centerContent is added
            in code for this website
          </Box>
        </Container>
        <br />
        <br />
        <h1>
          {" "}
          <strong>Container With Color</strong>
        </h1>
        <br />
        <br />
        <Center bg="teal" h="100px" color="white">
          This is the Center
        </Center>
        <br />
        <br />
        <h1>
          <strong>Icon With Styling</strong>
        </h1>
        <br />
        <br />
        <IconButton
          colorScheme="blue"
          aria-label="Search database"
          icon={<SearchIcon />}
        />
        <br />
        <br />
        <h1>
          <strong>Gradients</strong>
        </h1>
        <br />
        <br />
        <Box
          w="100%"
          h="200px"
          bgGradient="linear(to-r, green.200, pink.500)"
        />
      </Container>
    </>
  );
}

export default HomePage;
