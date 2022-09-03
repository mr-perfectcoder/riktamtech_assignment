import React from 'react'
import UserList from './UserList/UserList'
import {  useParams } from 'react-router-dom'
import Chat from './Chat/Chat'
import UserInfo from './UserInfo/UserInfo'
const MobileView = () => {
  let { username, user } = useParams()
  return (
    <div>

      {username && !user && (
        <div className=''>
          <Chat />
        </div>
      )}
      {!username && !user && (
        <div className='p-5'>
          <UserList />
        </div>
      )}

      {!username && user && (
        <div className=''>
          <UserInfo />
        </div>
      )}
    </div>
  )
}

export default MobileView
