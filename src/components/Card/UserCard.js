import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const UserCard = () => {
  return (
    <HStack px="4" gap="2" mr="2" w="full">
      {/* adding the user profile picture */}
      <Image src="cutePanda.jpg" w="14" borderRadius="50%" />

      {/* left side card details */}
      <HStack
        justifyContent="space-between"
        w="full"
        py="2"
        borderBottom="1px solid #AEBAC1"
      >
        <VStack spacing="0" alignItems="flex-start">
          <Heading fontSize="20px" fontWeight="600" color="white">
            Vinay
          </Heading>
          <Text fontSize="16px">Good Morning</Text>
        </VStack>

        {/* user online last day */}
        <Text alignSelf="flex-start" fontSize="12px">
          Today
        </Text>
      </HStack>
    </HStack>
  );
};

export default UserCard;
