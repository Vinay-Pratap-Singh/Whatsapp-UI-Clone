import { Text, VStack } from '@chakra-ui/react';
import React from 'react';

const LeftMenuBox = () => {
  return (
    <VStack
      bg="#28373f"
      alignItems="flex-start"
      w="full"
      position="absolute"
          top="43px"
          fontSize="14px"
          color="white"
    >
      <Text
        py="2"
        px="4"
        _hover={{ bg: '#202C33', transition: '400ms ease-in-out' }}
        w="full"
        cursor="pointer"
      >
        New group
      </Text>
      <Text
        py="2"
        px="4"
        _hover={{ bg: '#202C33', transition: '400ms ease-in-out' }}
        w="full"
        cursor="pointer"
      >
        New community
      </Text>
      <Text
        py="2"
        px="4"
        _hover={{ bg: '#202C33', transition: '400ms ease-in-out' }}
        w="full"
        cursor="pointer"
      >
        Starred messages
      </Text>
      <Text
        py="2"
        px="4"
        _hover={{ bg: '#202C33', transition: '400ms ease-in-out' }}
        w="full"
        cursor="pointer"
      >
        Settings
      </Text>
      <Text
        py="2"
        px="4"
        _hover={{ bg: '#202C33', transition: '400ms ease-in-out' }}
        w="full"
        cursor="pointer"
      >
        Log out
      </Text>
    </VStack>
  );
};

export default LeftMenuBox;
