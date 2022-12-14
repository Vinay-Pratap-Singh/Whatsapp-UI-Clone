import React from 'react';
import { background, HStack, VStack } from '@chakra-ui/react';
import LeftNavbar from './components/Header/LeftNavbar';
import Card from './components/UserCard/Card';

function App() {
  return (
    <>
      <HStack overflow="hidden">
        {/* for user details left section */}
        <VStack
          alignItems="left"
          bg="#202C33"
          color="#AEBAC1"
          overflow="hidden"
          position="relative"
          h="100vh"
        >
          {/* getting the left side navbar component */}
          <LeftNavbar />

          {/* vstack for rendering all the cards */}
          <VStack
            alignItems="left"
            py="4"
            overflowX="hidden"
            overflowY="scroll"
            sx={{
              '::-webkit-scrollbar': {
                width: '10px',
                background: '#28373f',
              },
              '::-webkit-scrollbar-thumb': {
                backgroundColor: `#1b252b`,
              },
            }}
          >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </VStack>
        </VStack>

        {/* right section for the chat option and displaying the previous messages */}
        <div>right side</div>
      </HStack>
    </>
  );
}

export default App;
