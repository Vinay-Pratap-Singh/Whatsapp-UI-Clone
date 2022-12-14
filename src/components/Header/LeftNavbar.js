import React from 'react';
import { Container, HStack, Image } from '@chakra-ui/react';
import { FaUsers } from 'react-icons/fa';
import { MdDonutLarge, MdMessage } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';

const LeftNavbar = () => {
  return (
    <>
      {/* designing the top header for left navigation menu */}
      <HStack
        bg="#202C33"
        color="#AEBAC1"
        justifyContent="space-between"
        w="28rem"
        px="5"
        py="3"
      >
        {/* for showing the user profile image */}
        <Image src="cutePanda.jpg" w="10" borderRadius="50%" />

        {/* for displaying the other user options */}
        <HStack spacing="30px">
          <FaUsers fontSize="25px" />
          <MdDonutLarge fontSize="23px" />
          <MdMessage fontSize="23px" />
          <BsThreeDotsVertical fontSize="23px" />
        </HStack>
      </HStack>
    </>
  );
};

export default LeftNavbar;
