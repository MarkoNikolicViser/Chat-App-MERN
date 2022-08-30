import React from 'react';
import { ChatListElement } from './ChatListElement';
export const ChatList = () => {
  const [arr, setArr] = React.useState([1, 2, 3, 4, 6, 7, 7, 7, 77, 8]);
  return (
    <div className='flex flex-col overflow-x-hidden overflow-scroll'>
      {arr.map((m, index) => (
        <ChatListElement key={index} />
      ))}
    </div>
  );
};
