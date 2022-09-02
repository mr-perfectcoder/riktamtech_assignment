import React from 'react'
import Chat from './Chat/Chat'
import UserInfo from './UserInfo/UserInfo'
import UserList from './UserList/UserList'

const FullScreen = () => {
  return (
    <div className='flex p-5 h-full'>
      <div className='w-[260px] '>
        <UserList />
      </div>
      <div className='w-min-[50%]  w-[60%] '>
        <Chat />
      </div>
      <div className='w-[320px]'>
        <UserInfo />
      </div>
    </div>
  )
}

export default FullScreen