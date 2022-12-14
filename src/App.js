import React from 'react';
import { HStack, VStack } from '@chakra-ui/react';
import LeftNavbar from './components/Header/LeftNavbar';
import UserCard from './components/Card/UserCard';
import RightNavbar from './components/Header/RightNavbar';
import DefaultChatCard from './components/Card/DefaultChatCard';

function App() {
  const data = false;
  return (
    <>
      <HStack overflow="hidden" spacing="0">
        {/* for user details left section */}
        <VStack
          alignItems="left"
          bg="#202C33"
          color="#AEBAC1"
          overflow="hidden"
          position="relative"
          h="100vh"
          borderRight="2px solid #AEBAC1"
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
        <VStack w="65%" h="100vh" alignSelf="baseline">
          {!data?<DefaultChatCard/>:<RightNavbar/>}
        </VStack>
      </HStack>
    </>
  );
}

export default App;
