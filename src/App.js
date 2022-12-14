import React from 'react';
import { HStack, VStack } from '@chakra-ui/react';
import LeftNavbar from './components/Header/LeftNavbar';
import Card from './components/UserCard/Card';

function App() {
  return (
    <>
      <HStack>
        {/* for user details left section */}
        <VStack alignItems="left" bg="#202C33" color="#AEBAC1" overflow="hidden">
          {/* getting the left side navbar component */}
          <LeftNavbar />

          {/* vstack for rendering all the cards */}
          <VStack alignItems="left" overflowY="scroll">
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

        <div>right side</div>
      </HStack>
    </>
  );
}

export default App;
