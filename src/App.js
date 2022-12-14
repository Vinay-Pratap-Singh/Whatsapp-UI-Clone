import React from 'react';
import { HStack, VStack } from '@chakra-ui/react';
import DefaultChatCard from './components/Card/DefaultChatCard';
import RightSection from './components/RightSection/RightSection';
import LeftSection from './components/LeftSection/LeftSection';

function App() {
  const data = true;
  return (
    <>
      <HStack overflow="hidden" spacing="0">
        {/* for user details left section */}
        <LeftSection/>

        {/* right section for the chat option and displaying the previous messages */}
        <VStack w="65%" h="100vh" overflow="hidden" position="relative" spacing="0">
          {!data ? <DefaultChatCard /> : <RightSection/>}
        </VStack>
      </HStack>
    </>
  );
}

export default App;
