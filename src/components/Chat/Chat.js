import React, { useEffect, useRef } from 'react'
import MobileBack from '../MobileBack'
import { useParams } from 'react-router-dom'
import Messages from './Messages'
import Send from './Send'
import { useSelector, useDispatch } from 'react-redux'
import { getMessage, selectUsers } from '../../features/users/userSlice'

const Chat = () => {
  let { username } = useParams()
  const endOfMessagesRef = useRef(null)
  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView()
  }
  const users = useSelector(selectUsers)
  const dispatch = useDispatch()
  useEffect(() => {
    scrollToBottom()
  }, [username])

  useEffect(() => {
    if(username){
   dispatch(getMessage(username))
    }
 
  }, [username])



  return (
    <div className='pt-2 pb-2 lg:pl-10 lg:pr-10'>
      <MobileBack
        image={users.messages[0].image}
        user={users.messages[0].username}
      />
      <div className='lg:h-lgFull  sm:h-smFull  xs:h-smFull overflow-y-scroll box-border bg-blue-50 rounded-2xl overflow-hidden chatScroll '>
        <Messages messages={users.messages} image={users.messages[0].image} />
        <div className=' w-full  lg:px-8 bottom-0 sticky lg:mb-5'>
          <Send endOfMessagesRef={endOfMessagesRef} username={username} />
        </div>
        <div ref={endOfMessagesRef} />
      </div>
    </div>
  )
}

export default Chat
