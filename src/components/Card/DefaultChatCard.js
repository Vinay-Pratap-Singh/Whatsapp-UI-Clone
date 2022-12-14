import { Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiFillLock} from "react-icons/ai"

const DefaultChatCard = () => {
    return (
        <VStack textAlign="center" bg="#28373F" w="full" h="full" pt="32" color="#AEBAC1">
            <Image src='defaultChatImg.png' w="26rem"/>
            <Heading color="white" fontWeight="200" fontSize="33px" pt="20px" pb="10px">WhatsApp Web</Heading>
            <Text fontSize="14px">Send and receive messages without keeping your phone online. <br />Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</Text>

            {/* footer area */}
            <HStack position="absolute" bottom="30px" fontSize="13px">
                <AiFillLock />
                <Text>End-to-end encrypted</Text>
            </HStack>
    </VStack>
  )
}

export default DefaultChatCard