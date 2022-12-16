import { HStack, Text, VStack } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { DataContext } from '../../App';

const ChatCard = () => {
  // getting the chat data to display
  const { data } = useContext(DataContext);
  const chat = data.chat;
  return (
    <VStack
      bg="#33454f"
      w="full"
      h="full"
      p="6"
      color="white"
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
      {chat.map((chat, index) => {
        return chat.user !== 'contactUser' ? (
          <HStack
            key={index}
            alignSelf="flex-start"
            bg="#108dd1"
            px="2"
            py="1"
            borderRadius="5px"
          >
            <Text>{chat.message}</Text>
            <Text pl={2} fontSize="10px" alignSelf="end">{chat.time}</Text>
          </HStack>
        ) : (
          <HStack
            key={index}
            alignSelf="flex-end"
            bg="#005C4B"
            px="2"
            py="1"
            borderRadius="5px"
          >
            <Text>{chat.message}</Text>
            <Text pl={2} fontSize="10px" alignSelf="end">{chat.time}</Text>
          </HStack>
        );
      })}
    </VStack>
  );
};

export default ChatCard;
