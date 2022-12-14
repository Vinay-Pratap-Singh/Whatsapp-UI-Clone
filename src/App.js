import { HStack } from '@chakra-ui/react';
import React from 'react';
import LeftNavbar from './components/Header/LeftNavbar';

function App() {
  return (
    <>
      <HStack>
        {/* for left side whatsapp section */}
        <div>
          {/* getting the left side navbar component */}
        <LeftNavbar />
        </div>

        <div>right side</div>
      </HStack>
    </>
  );
}

export default App;
