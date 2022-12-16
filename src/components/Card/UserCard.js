import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const UserCard = (props) => {
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
    >
      {/* adding the user profile picture */}
      <Image src={props.src} w="14" borderRadius="50%" />

      {/* left side card details */}
      <HStack
        justifyContent="space-between"
        w="full"
        py="2"
        borderBottom="1px solid #33454f"
      >
        <VStack spacing="0" alignItems="flex-start">
          <Heading fontSize="18px" fontWeight="400" color="white" style={{textTransform:"capitalize"}}>
            {props.name}
          </Heading>
          <Text fontSize="14px">{props.lastMessage}</Text>
        </VStack>

        {/* user online last day */}
        <Text alignSelf="flex-start" fontSize="12px" style={{textTransform:"capitalize"}}>
          {props.lastSeenDay}
        </Text>
      </HStack>
    </HStack>
  );
};

export default UserCard;
