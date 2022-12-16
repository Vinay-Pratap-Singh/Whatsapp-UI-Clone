import React, { createContext, useState } from 'react';
import { HStack, VStack } from '@chakra-ui/react';
import DefaultChatCard from './components/Card/DefaultChatCard';
import RightSection from './components/RightSection/RightSection';
import LeftSection from './components/LeftSection/LeftSection';

// importing the data from dummy json file
import UserData from '../src/Data/Data.json';

// using the context for handling the user data
export const DataContext = createContext();

function App() {
  // for opening the right section
  const [data, setContextData] = useState(null);

  return (
    <>
      <DataContext.Provider value={{UserData, data, setContextData}}>
        <HStack overflow="hidden" spacing="0" margin="auto" maxWidth="1440px">
          {/* for user details left section */}
          <LeftSection />

          {/* right section for the chat option and displaying the previous messages */}
          <VStack
            w="65%"
            h="100vh"
            overflow="hidden"
            position="relative"
            spacing="0"
          >
            {!data ? <DefaultChatCard /> : <RightSection />}
          </VStack>
        </HStack>
      </DataContext.Provider>
    </>
  );
}

export default App;
