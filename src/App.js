import React from 'react';
import { HStack, VStack } from '@chakra-ui/react';
import LeftNavbar from './components/Header/LeftNavbar';
import UserCard from './components/Card/UserCard';
import DefaultChatCard from './components/Card/DefaultChatCard';
import RightSection from './components/RightSection/RightSection';

function App() {
  const data = true;
  return (
    <>
      <HStack overflow="hidden" spacing="0">
        {/* for user details left section */}
        <VStack
          alignItems="left"
          bg="#202C33"
          color="#AEBAC1"
          overflow="hidden"
          h="100vh"
          borderRight="2px solid #33454f"
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
                background: '#202C33',
              },
              '::-webkit-scrollbar-thumb': {
                backgroundColor: `#1b252b`,
              },
            }}
          >
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
          </VStack>
        </VStack>

        {/* right section for the chat option and displaying the previous messages */}
        <VStack w="65%" h="100vh" overflow="hidden" position="relative" spacing="0">
          {!data ? <DefaultChatCard /> : <RightSection/>}
        </VStack>
      </HStack>
    </>
  );
}

export default App;
