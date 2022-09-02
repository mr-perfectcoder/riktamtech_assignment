import React from 'react'

const Message = ({status}) => {
   const isUserMessage = status
  return (
    <div
      className={`flex  ml-5  items-center mr-5 relative ${
        isUserMessage && 'justify-end'
      }`}
    >
      <div className={` h-16 w-16 ${isUserMessage && 'order-last ml-2'}`}>
        <img src='./bill.png' alt='' />
        <div className='flex h-2 w-2 -mt-5 ml-11  absolute rounded-full justify-center  items-center  bg-white'>
          <div className='h-[5px] w-[5px] rounded-full bg-green-600 '></div>
        </div>
      </div>

      <div className=' mt-4'>
        <div
          className={`flex space-x-4 p-3    rounded-lg ${
            isUserMessage
              ? 'rounded-br-none bg-gray-900 text-white'
              : 'rounded-bl-none bg-white text-gray-900 shadow-md'
          }`}
        >
          hiii hfhljg jsdyiesdk
        </div>
        <div
          className={`flex text-[10px] mt-1 text-gray-400 ${
            isUserMessage && 'justify-end'
          }`}
        >
          <span>9h ago</span>
        </div>
      </div>

      {/* <TimeAgo
            className={`text-[10px] italic text-gray-400 ${
              isUserMessage && 'order-first pr-1'
            }`}
            datetime={message.createdAt}
          /> */}
    </div>
  )
}

export default Message