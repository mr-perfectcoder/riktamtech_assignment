import React, { useState } from 'react'
import CollpaseIcon from '../CollpaseIcon'
import UserCard from './UserCard'
const ChatList = ({ activeUsers, archivedUser }) => {
  const [showActive, setshowActive] = useState(true)
  const [showArchived, setshowArchived] = useState(false)

  const handleAcrhive = () => {
    if (showActive) {
      setshowActive(false)
    }
    if (showArchived) {
      setshowActive(true)
    }
    setshowArchived(!showArchived)
  }

  const handleActive = () => {
    setshowArchived(false)
    setshowActive(!showActive)
  }

  return (
    <div className='lg:pr-1  pl-2 mt-2'>
      <div className='cursor-pointer' onClick={handleActive}>
        <div className='flex justify-between'>
          <div className='flex'>
            <h1 className='font-Poppins font-semibold text-sm'>
              Active Conversations
            </h1>
            <div className='bg-gray-200 w-5 h-5 items-center  rounded-full pl-[5.5px] pt-[1.5px] ml-2 mt-[1px]'>
              <p className='font-Poppins font-semibold text-[12px]'>
                {activeUsers.length}
              </p>
            </div>
          </div>
          <div className='mt-1'>
            <CollpaseIcon active={showActive} />
          </div>
        </div>
      </div>

      {showActive && (
        <div className='lg:overflow-y-scroll lg:h-72 scrollBar'>
          {activeUsers.map((item, index) => {
            return <UserCard user={item} key={index.toString()} />
          })}
        </div>
      )}

      <div className='mt-5'>
        <div className='cursor-pointer' onClick={handleAcrhive}>
          <div className='flex justify-between'>
            <div className='flex'>
              <h1 className='font-Poppins font-semibold text-sm'>
                Archived Conversations
              </h1>
              <div className='bg-gray-200 w-5 h-5 items-center  rounded-full pl-[6.5px] pt-[1.5px] ml-2 mt-[1px]'>
                <p className='font-Poppins font-semibold text-[12px]'>
                  {archivedUser.length}
                </p>
              </div>
            </div>

            <div className='mt-1 '>
              <CollpaseIcon active={showArchived} />
            </div>
          </div>
        </div>

        {showArchived && (
          <div className='lg:overflow-y-scroll lg:h-72 scrollBar'>
            {archivedUser.map((item, index) => {
              return <UserCard user={item} key={index.toString()} />
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default ChatList
