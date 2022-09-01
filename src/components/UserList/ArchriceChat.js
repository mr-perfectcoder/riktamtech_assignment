import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import UserCard from './UserCard'

const ArchriceChat = () => {

    const [showArchived, setshowArchived] = useState(false)

    return (
      <div className='mt-5'>
        <div
          className='cursor-pointer'
          onClick={() => setshowArchived(!showArchived)}
        >
          <div className='flex justify-between'>
            <div className='flex'>
              <h1 className='font-Poppins font-semibold '>
                Archived Conversations
              </h1>
              <div className='bg-gray-200 w-5 h-5 items-center  rounded-full pl-[5.5px] pt-[1.5px] ml-2 mt-[3px]'>
                <p className='font-Poppins font-semibold text-[12px]'>7</p>
              </div>
            </div>

            <h1 className='mt-1'>
              {showArchived ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </h1>
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
    )
}

export default ArchriceChat