import { VStack } from '@chakra-ui/react'
import React from 'react'
import UserCard from "../Card/UserCard"
import LeftNavbar from "../Header/LeftNavbar"

const LeftSection = () => {
  return (
      <>
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
    </>
  )
}

export default LeftSection