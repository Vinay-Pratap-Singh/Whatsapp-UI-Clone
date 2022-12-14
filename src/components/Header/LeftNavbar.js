import React from 'react';
import { HStack, Image, Input, VStack } from '@chakra-ui/react';
import { FaUsers } from 'react-icons/fa';
import { MdDonutLarge, MdMessage } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { BiFilter } from 'react-icons/bi';
import SearchBar from './SearchBar';

const LeftNavbar = () => {
  return (
    <VStack position="sticky" top="0">
      {/* designing the top header for left navigation menu */}
      <HStack
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

      {/* search bar component */}
      <SearchBar/>
    </VStack>
  );
};

export default LeftNavbar;
