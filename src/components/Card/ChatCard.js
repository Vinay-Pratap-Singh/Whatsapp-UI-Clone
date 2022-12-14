import { Text, VStack } from '@chakra-ui/react'
import React from 'react'

const ChatCard = () => {
  return (
    <VStack bg="#33454f" w="full" h="full" p="6" color="white" overflowX="hidden" overflowY="scroll" sx={{
      '::-webkit-scrollbar': {
        width: '10px',
        background: '#202C33',
      },
      '::-webkit-scrollbar-thumb': {
        backgroundColor: `#1b252b`,
      },
    }}>
        <Text alignSelf="flex-start" bg="#108dd1" px="2" py="1" borderRadius="5px">Hi</Text>
        <Text alignSelf="flex-end" bg="#005C4B" px="2" py="1" borderRadius="5px">Hello</Text>
        <Text alignSelf="flex-start" bg="#108dd1" px="2" py="1" borderRadius="5px">Good Morning</Text>
        <Text alignSelf="flex-start" bg="#108dd1" px="2" py="1" borderRadius="5px">Kaise ho?</Text>
        <Text alignSelf="flex-end" bg="#005C4B" px="2" py="1" borderRadius="5px">Ekdm Badiya</Text>
        <Text alignSelf="flex-start" bg="#108dd1" px="2" py="1" borderRadius="5px">Hi</Text>
        <Text alignSelf="flex-end" bg="#005C4B" px="2" py="1" borderRadius="5px">Hello</Text>
        <Text alignSelf="flex-start" bg="#108dd1" px="2" py="1" borderRadius="5px">Good Morning</Text>
        <Text alignSelf="flex-start" bg="#108dd1" px="2" py="1" borderRadius="5px">Kaise ho?</Text>
        <Text alignSelf="flex-end" bg="#005C4B" px="2" py="1" borderRadius="5px">Ekdm Badiya</Text>
        <Text alignSelf="flex-start" bg="#108dd1" px="2" py="1" borderRadius="5px">Hi</Text>
        <Text alignSelf="flex-end" bg="#005C4B" px="2" py="1" borderRadius="5px">Hello</Text>
        <Text alignSelf="flex-start" bg="#108dd1" px="2" py="1" borderRadius="5px">Good Morning</Text>
        <Text alignSelf="flex-start" bg="#108dd1" px="2" py="1" borderRadius="5px">Kaise ho?</Text>
        <Text alignSelf="flex-end" bg="#005C4B" px="2" py="1" borderRadius="5px">Ekdm Badiya</Text>
        <Text alignSelf="flex-start" bg="#108dd1" px="2" py="1" borderRadius="5px">Hi</Text>
        <Text alignSelf="flex-end" bg="#005C4B" px="2" py="1" borderRadius="5px">Hello</Text>
        <Text alignSelf="flex-start" bg="#108dd1" px="2" py="1" borderRadius="5px">Good Morning</Text>
        <Text alignSelf="flex-start" bg="#108dd1" px="2" py="1" borderRadius="5px">Kaise ho?</Text>
        <Text alignSelf="flex-end" bg="#005C4B" px="2" py="1" borderRadius="5px">Ekdm Badiya</Text>
    </VStack>
  )
}

export default ChatCard