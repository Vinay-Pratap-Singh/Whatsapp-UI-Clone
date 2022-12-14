import React from 'react';
import { HStack, Image, useDisclosure, VStack } from '@chakra-ui/react';
import { FaUsers } from 'react-icons/fa';
import { MdDonutLarge, MdMessage } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';
import SearchBar from './SearchBar';
import ProfileDetailDrawer from '../Drawer/ProfileDetailDrawer';

const LeftNavbar = () => {
  // for closing, opening of drawer
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack position="sticky" top="0">
      {/* designing the top header for left navigation menu */}
      <HStack
        justifyContent="space-between"
        w="28rem"
        px="5"
        py="3"
        bg="#28373f"
      >
        {/* for showing the user profile image */}
        <Image
          onClick={onOpen}
          src="cutePanda.jpg"
          w="10"
          borderRadius="50%"
          cursor="pointer"
        />

        {/* drawer component */}
        <ProfileDetailDrawer onClose={onClose} isOpen={isOpen} />

        {/* for displaying the other user options */}
        <HStack spacing="30px">
          <FaUsers fontSize="25px" />
          <MdDonutLarge fontSize="23px" />
          <MdMessage fontSize="23px" />
          <BsThreeDotsVertical fontSize="23px" />
        </HStack>
      </HStack>

      {/* search bar component */}
      <SearchBar />
    </VStack>
  );
};

export default LeftNavbar;
