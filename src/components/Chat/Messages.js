import React from 'react'
import Message from './Message'

const Messages = ({ messages, image }) => {

  return (
    <div className='mb-16'>
      {messages[0].messages && (
        <div className='mt-10 mb-5'>
          {messages[0].messages.map((item, index) => {
            return (
              <Message
                status={true}
                image={image}
                message={item}
                key={index.toString()}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Messages