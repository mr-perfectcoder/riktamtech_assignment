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
    <div className='pt-2 pb-2 pl-10 pr-10'>
      <div className='fullHeight overflow-y-scroll box-border bg-blue-50 rounded-2xl overflow-hidden chatScroll '>
        <Messages />
        <div className=' w-full  px-8 bottom-0 sticky mb-5'>
          <Send endOfMessagesRef={endOfMessagesRef} />
        </div>
        <div ref={endOfMessagesRef} />
      </div>
    </div>
  )
}

export default Chat
