import React, { useState } from 'react';
import { HStack, Image, useDisclosure, VStack } from '@chakra-ui/react';
import { FaUsers } from 'react-icons/fa';
import { MdDonutLarge, MdMessage } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';
import SearchBar from './SearchBar';
import ProfileDetailDrawer from '../Drawer/ProfileDetailDrawer';
import LeftMenuBox from '../MenuBox/LeftMenuBox';

const LeftNavbar = () => {
  // for closing, opening of drawer
  const { isOpen, onOpen, onClose } = useDisclosure();

  // for toggling the view of menu box
  const [isOpened, setIsOpened] = useState(false);

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
        <HStack spacing="30px" position="relative">
          <FaUsers fontSize="25px" cursor="pointer"/>
          <MdDonutLarge fontSize="23px" cursor="pointer" />
          <MdMessage fontSize="23px" cursor="pointer" />
          <BsThreeDotsVertical fontSize="23px" cursor="pointer" onClick={()=>setIsOpened(!isOpened)} />
          {isOpened?<LeftMenuBox/>:()=>setIsOpened(isOpened)}
        </HStack>
      </HStack>

      {/* search bar component */}
      <SearchBar />
    </VStack>
  );
};

export default LeftNavbar;
