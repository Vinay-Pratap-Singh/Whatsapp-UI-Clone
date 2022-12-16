import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useContext } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { MdModeEdit } from 'react-icons/md';
import { DataContext } from '../../App';

const ProfileDetailDrawer = props => {
  // getting the owner user data from the use context
  const {UserData} = useContext(DataContext);
  const ownerData = UserData.ownerDetails;

  return (
    <>
      <Drawer
        size="sm"
        placement="left"
        onClose={props.onClose}
        isOpen={props.isOpen}
      >
        <DrawerOverlay />
        <DrawerContent color="white">
          <DrawerHeader p="0">
            <HStack spacing="0" bg="#28373f" pt="16" pl="6" pb="4" gap="6">
              <BsArrowLeft onClick={props.onClose} cursor="pointer" />
              <Text>Profile</Text>
            </HStack>
          </DrawerHeader>

          <DrawerBody
            p="0"
            bg="#111B21"
            overflowX="none"
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
            <VStack pt="8">
              <Image src={ownerData.profilePicture} w="52" borderRadius="50%" />

              {/* profile details */}
              <VStack alignItems="flex-start" px="10" pt="6">
                <Text color="green" fontSize="14px" mb="2">
                  Your name
                </Text>

                {/* name box */}
                <HStack
                  justifyContent="space-between"
                  w="full"
                  fontSize="18px"
                  pb="6"
                >
                  <Text style={{textTransform:"capitalize"}}>{ownerData.name}</Text>
                  <MdModeEdit />
                </HStack>

                <Text fontSize="14px" pb="6">
                  This is not your username or pin. This name will be visible to
                  your WhatsApp contacts.
                </Text>

                <Text color="green" fontSize="14px" mb="2" pb="4">
                  About
                </Text>

                {/* label name box */}
                <HStack
                  justifyContent="space-between"
                  w="full"
                  fontSize="18px"
                  pb="6"
                >
                  <Text style={{textTransform:"capitalize"}}>{ownerData.about}</Text>
                  <MdModeEdit />
                </HStack>
              </VStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ProfileDetailDrawer;
