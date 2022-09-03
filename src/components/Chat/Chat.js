import React, { useEffect, useRef } from 'react'
import MobileBack from '../MobileBack'

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
    <div className='pt-2 pb-2 lg:pl-10 lg:pr-10'>
      <MobileBack />
      <div className='lg:h-lgFull  sm:h-smFull  xs:h-smFull overflow-y-scroll box-border bg-blue-50 rounded-2xl overflow-hidden chatScroll '>
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
