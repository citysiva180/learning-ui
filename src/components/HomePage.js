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
} from "@chakra-ui/react";
function HomePage() {
  return (
    <>
      <Container maxW="container.lg">
        <br />
        <br />
        <h1>Chakra UI Notes</h1>
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
        <OrderedList>
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
          <ListItem>Consectetur adipiscing elit</ListItem>
          <ListItem>Integer molestie lorem at massa</ListItem>
          <ListItem>Facilisis in pretium nisl aliquet</ListItem>
        </OrderedList>

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
        <Center bg="teal" h="100px" color="white">
          This is the Center
        </Center>
        <br />
        <br />
        <h1>Icon Styling</h1>
        <IconButton
          colorScheme="blue"
          aria-label="Search database"
          icon={<SearchIcon />}
        />
      </Container>

      {/* <VStack>
        <Container maxW="container.xl">Extra-Large Container</Container>
        <Container maxW="container.lg">Large Container</Container>
        <Container maxW="container.md">Medium Container</Container>
        <Container maxW="container.sm">Small Container</Container>
      </VStack> */}
    </>
  );
}

export default HomePage;
