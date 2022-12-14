import { HStack, Input } from '@chakra-ui/react'
import React from 'react'
import { BiLink } from "react-icons/bi"
import {BsMicFill,BsEmojiLaughing} from "react-icons/bs"

const ChatSectionBar = () => {
  return (
      <HStack position="sticky" bottom="0" w="full" bg="#28373f" color="#c9c9c9" py="3" px="4" gap="4">
          <BsEmojiLaughing fontSize="25" cursor="pointer"/>
          <BiLink fontSize="25" cursor="pointer"/>
          <Input placeholder='Type a message' _focus="outline-none"
          bg="#33454f"
          border="none"/>
          <BsMicFill fontSize="25" cursor="pointer"/>
    </HStack>
  )
}

export default ChatSectionBar