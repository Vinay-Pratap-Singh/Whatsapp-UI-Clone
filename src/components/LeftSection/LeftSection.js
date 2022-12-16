import { VStack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { DataContext } from '../../App';
import UserCard from '../Card/UserCard';
import LeftNavbar from '../Header/LeftNavbar';

const LeftSection = () => {
  // getting the owner user data from the use context
  const UserData = useContext(DataContext);
  const contacts = UserData.contacts;

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
          {/* rendering all the cards using the map */}
          {contacts.map((element, index) => {
            return (
              <UserCard
                key={index}
                src={element.profile.profilePicture}
                name={element.profile.name}
                lastMessage={element.chat[element.chat.length - 1].message}
                lastSeenDay={element.profile.lastSeenDay}
              />
            );
          })}
        </VStack>
      </VStack>
    </>
  );
};

export default LeftSection;
