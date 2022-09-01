import React, { useEffect, useRef } from 'react'

import Messages from './Messages'
import Send from './Send'
const Chat = () => {
  const endOfMessagesRef = useRef(null)
  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView()
  }
  useEffect(() => {
 scrollToBottom()
  }, [])
  
  return (
    <div className='flex-auto w-[60%] pt-2 pb-2 pl-10 pr-10'>
      <div className='fullHeight overflow-y-scroll box-border bg-blue-50 rounded-2xl overflow-hidden chatScroll '>
        <Messages />
        <Send endOfMessagesRef={endOfMessagesRef} />
        <div ref={endOfMessagesRef} />
      </div>
    </div>
  )
}

export default Chat
