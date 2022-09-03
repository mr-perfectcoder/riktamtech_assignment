import React from 'react'
import TimeAgo from 'timeago-react'
const Message = ({ message, image }) => {
  let isUserMessage = false
  let userImage = image
  if (message.username === 'bill') {
    isUserMessage = true
    userImage = 'bill.png'
  }


  return (
    <div
      className={`flex  ml-5  items-center mr-5 relative ${
        isUserMessage && 'justify-end'
      }`}
    >
      <div className={` h-16 w-16 ${isUserMessage && 'order-last ml-2'}`}>
        <img src={window.location.origin + '/' + userImage} alt='' />
        <div className='flex h-2 w-2 -mt-5 ml-11  absolute rounded-full justify-center  items-center  bg-white'>
          <div className='h-[5px] w-[5px] rounded-full bg-green-600 '></div>
        </div>
      </div>

      <div className=' mt-4'>
        <div
          className={`flex space-x-4 p-3  rounded-lg ${
            isUserMessage
              ? 'rounded-br-none bg-gray-900 text-white'
              : 'rounded-bl-none bg-white text-gray-900 shadow-md'
          }`}
        >
          {message.message}
        </div>
        <div
          className={`flex text-[10px] mt-1 text-gray-400 ${
            isUserMessage && 'justify-end'
          }`}
        >
          <TimeAgo datetime={message.createdAt} />
        </div>
      </div>
    </div>
  )
}

export default Message
