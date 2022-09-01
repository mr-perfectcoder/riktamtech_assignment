import React from 'react'

const Message = ({status}) => {
   const isUserMessage = status
  return (
    <div
      className={`flex items-end ml-10 relative ${
        isUserMessage && 'justify-end'
      }`}
    >
      <div className={`relative h-8 w-8 ${isUserMessage && 'order-last ml-2'}`}>
        username
      </div>
      <div
        className={`flex space-x-4 p-3 rounded-lg ${
          isUserMessage
            ? 'rounded-br-none bg-pink-300'
            : 'rounded-bl-none bg-blue-400'
        }`}
      >
        hiii
      </div>

      {/* <TimeAgo
            className={`text-[10px] italic text-gray-400 ${
              isUserMessage && 'order-first pr-1'
            }`}
            datetime={message.createdAt}
          /> */}
      <p
        className={`absolute -bottom-5 text-xs ${
          isUserMessage ? 'text-pink-300 ' : 'text-blue-500'
        }`}
      >
        username
      </p>
    </div>
  )
}

export default Message