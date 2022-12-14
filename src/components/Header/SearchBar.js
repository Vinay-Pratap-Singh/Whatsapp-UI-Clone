import React from 'react';
import { HStack, Input } from '@chakra-ui/react';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { BiFilter } from 'react-icons/bi';
const SearchBar = () => {
  return (
    <HStack color="#AEBAC1" w="full" px="4" my="2" gap="3">
      {/* input box with search icon */}
      <HStack bg="#202C33" px="4" borderRadius="10px" w="90%">
        <RxMagnifyingGlass fontSize="20px" />
        <Input
          placeholder="Search or start new chat"
          _focus="outline-none"
          bg="transparent"
          border="none"
        />
      </HStack>

      {/* adding the filter icon */}
      <BiFilter fontSize="25px" />
    </HStack>
  );
};

export default SearchBar;
