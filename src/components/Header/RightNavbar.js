import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { RxMagnifyingGlass } from 'react-icons/rx'
import { DataContext } from '../../App'
import RightMenuBox from '../MenuBox/RightMenuBox'

const RightNavbar = () => {
    // for toggling the view of menu box
  const [isOpened, setIsOpened] = useState(false);
  
  // getting the data from the context
  const {data} = useContext(DataContext);
  const profile = data.profile;

  return (
    <HStack
      w="full"
      px="5"
      py="3"
      bg="#28373f"
      color="#AEBAC1"
      justifyContent="space-between"
      position="relative"
    >
        {/* for showing the user profile image */}
      <HStack gap="2">
        <Image src={profile.profilePicture} w="10" h="10" borderRadius="50%" />
        
        {/* user online and offline details */}
        <VStack alignItems="flex-start" spacing="0">
          <Heading fontSize="16px" fontWeight="600" color="white" style={{textTransform:"capitalize"}}>{profile.name}</Heading>
          <Text fontSize="14px">{profile.lastSeen}</Text>
        </VStack>
      </HStack>

      {/* for adding the search and menu icons */}
      <HStack gap="20px">
        <RxMagnifyingGlass fontSize="25px" cursor="pointer"/>
        <BsThreeDotsVertical fontSize="23px" cursor="pointer" onClick={() => setIsOpened(!isOpened)} />
        {isOpened?<RightMenuBox/>:()=>setIsOpened(isOpened)}
      </HStack>
      
    </HStack>
  )
}

export default RightNavbar