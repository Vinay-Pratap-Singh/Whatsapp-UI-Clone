import React from 'react';
import ChatCard from '../Card/ChatCard';
import ChatSectionFooter from '../Card/ChatSectionFooter';
import RightNavbar from '../Header/RightNavbar';

const RightSection = () => {
  return (
    <>
      <RightNavbar />
      <ChatCard />
      <ChatSectionFooter />
    </>
  );
};

export default RightSection;
