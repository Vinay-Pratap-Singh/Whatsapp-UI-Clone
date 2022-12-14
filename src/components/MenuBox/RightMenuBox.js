import { Text, VStack } from '@chakra-ui/react'
import React from 'react'

const RightMenuBox = () => {
  return (
    <VStack
      bg="#28373f"
      alignItems="flex-start"
      w="fit-content"
      position="absolute"
          top="63px"
          right="6"
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
        Contact info
      </Text>
      <Text
        py="2"
        px="4"
        _hover={{ bg: '#202C33', transition: '400ms ease-in-out' }}
        w="full"
        cursor="pointer"
      >
        Select messages
      </Text>
      <Text
        py="2"
        px="4"
        _hover={{ bg: '#202C33', transition: '400ms ease-in-out' }}
        w="full"
        cursor="pointer"
      >
        Close chat
      </Text>
      <Text
        py="2"
        px="4"
        _hover={{ bg: '#202C33', transition: '400ms ease-in-out' }}
        w="full"
        cursor="pointer"
      >
        Mute notifications
      </Text>
      <Text
        py="2"
        px="4"
        _hover={{ bg: '#202C33', transition: '400ms ease-in-out' }}
        w="full"
        cursor="pointer"
      >
        Disappearing messages
      </Text>
      <Text
        py="2"
        px="4"
        _hover={{ bg: '#202C33', transition: '400ms ease-in-out' }}
        w="full"
        cursor="pointer"
      >
        Clear messages
      </Text>
      <Text
        py="2"
        px="4"
        _hover={{ bg: '#202C33', transition: '400ms ease-in-out' }}
        w="full"
        cursor="pointer"
      >
        Delete chat
      </Text>
      <Text
        py="2"
        px="4"
        _hover={{ bg: '#202C33', transition: '400ms ease-in-out' }}
        w="full"
        cursor="pointer"
      >
        Report
      </Text>
      <Text
        py="2"
        px="4"
        _hover={{ bg: '#202C33', transition: '400ms ease-in-out' }}
        w="full"
        cursor="pointer"
      >
        Block
      </Text>
    </VStack>
  )
}

export default RightMenuBox