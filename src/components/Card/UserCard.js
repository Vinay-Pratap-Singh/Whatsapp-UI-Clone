import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React, { createContext, useContext, useState } from 'react';
import { DataContext } from '../../App';

// for tranferring the user data within components

const UserCard = () => {
  const { setContextData, UserData } = useContext(DataContext);

  // getting the owner user data from the use context
  const contacts = UserData.contacts;

  // function to set chat data
  const userCardFunction = element => {
    setContextData(element);
  };

  return (
    <>
        {contacts.map((element, index) => {
          return (
            <HStack
              px="4"
              py="2"
              gap="2"
              mr="2"
              w="full"
              cursor="pointer"
              _hover={{
                bg: '#33454f',
                border: 'none',
                transition: '400ms ease-in-out',
              }}
              key={index}
              onClick={() => userCardFunction(element)}
            >
              {/* adding the user profile picture */}
              <Image
                src={element.profile.profilePicture}
                w="14"
                h="14"
                borderRadius="50%"
              />

              {/* left side card details */}
              <HStack
                justifyContent="space-between"
                w="full"
                py="2"
                borderBottom="1px solid #33454f"
              >
                <VStack spacing="0" alignItems="flex-start">
                  <Heading
                    fontSize="18px"
                    fontWeight="400"
                    color="white"
                    style={{ textTransform: 'capitalize' }}
                  >
                    {element.profile.name}
                  </Heading>
                  <Text fontSize="14px">
                    {element.chat[element.chat.length - 1].message}
                  </Text>
                </VStack>

                {/* user online last day */}
                <Text
                  alignSelf="flex-start"
                  fontSize="12px"
                  style={{ textTransform: 'capitalize' }}
                >
                  {element.profile.lastSeenDay}
                </Text>
              </HStack>
            </HStack>
          );
        })}
    </>
  );
};

export default UserCard;
