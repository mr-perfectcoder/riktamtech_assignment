import React, { useState } from 'react'
import CollpaseIcon from '../CollpaseIcon'
import UserCard from './UserCard'
const ChatList = () => {
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

  const handleActive = ()=>{
    setshowArchived(false)
    setshowActive(!showActive)
  }
  return (
    <div className='pr-4 pl-2 mt-6'>
      <div className='cursor-pointer' onClick={handleActive}>
        <div className='flex justify-between'>
          <div className='flex'>
            <h1 className='font-Poppins font-semibold '>
              Active Conversations
            </h1>
            <div className='bg-gray-200 w-5 h-5 items-center  rounded-full pl-[5.5px] pt-[1.5px] ml-2 mt-[3px]'>
              <p className='font-Poppins font-semibold text-[12px]'>4</p>
            </div>
          </div>
          <div className='mt-1'>
            <CollpaseIcon active={showActive} />
          </div>
        </div>
      </div>

      {showActive && (
        <div className='overflow-y-scroll h-72 scrollBar'>
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      )}

      <div className='mt-5'>
        <div className='cursor-pointer' onClick={handleAcrhive}>
          <div className='flex justify-between'>
            <div className='flex'>
              <h1 className='font-Poppins font-semibold '>
                Archived Conversations
              </h1>
              <div className='bg-gray-200 w-5 h-5 items-center  rounded-full pl-[6.5px] pt-[1.5px] ml-2 mt-[3px]'>
                <p className='font-Poppins font-semibold text-[12px]'>7</p>
              </div>
            </div>

            <div className='mt-1'>
              <CollpaseIcon active={showArchived} />
            </div>
          </div>
        </div>

        {showArchived && (
          <div className='overflow-y-scroll h-72 scrollBar'>
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
          </div>
        )}
      </div>
    </div>
  )
}

export default ChatList
