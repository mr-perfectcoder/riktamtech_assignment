import React, { useState } from 'react'
import Switch from 'react-switch'
import { IoSettingsOutline } from 'react-icons/io5'

import ChatList from './ChatList'
const UserList = () => {
  const [active, setactive] = useState(true)
  const handleChange = (checked) => {
    setactive(checked)
  }
  return (
    <div className='flex-auto w-[20%]'>
      <div className='flex align-middle'>
        <img src='./logo.png' alt='logo' className='w-[50px]' />
        <h1 className='mt-[4.5px] text-xl font-Poppins font-semibold ml-2'>QuickChat</h1>
      </div>
      <div className='p-2 mt-1'>
        <div className='box-border h-60 w-full p-4 bg-blue-50 rounded-[15px] border-2 pt-5'>
          <div class='grid place-items-center'>
            <img src='./bill.png' className='w-[120px]' />
            <div className='flex'>
              <p className='text-xl font-Poppins font-semibold'>
                Bill Bradford
              </p>
              <IoSettingsOutline className='ml-1 mt-[6px]' size={18} />
            </div>

            <p className='text-sm font-medium text-gray-600 font-Poppins mt-1'>
              Lead UX/UI Designer
            </p>
            <div className='flex mt-1'>
              <div>
                <Switch
                  onChange={handleChange}
                  checked={active}
                  onColor='#1c56f3'
                  onHandleColor='#fff'
                  handleDiameter={6}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow='0px 1px 5px rgba(0, 0, 0, 0.6)'
                  activeBoxShadow='0px 0px 1px 10px rgba(0, 0, 0, 0.2)'
                  height={15}
                  width={22}
                  className='react-switch'
                />
              </div>

              <div>
                <p className='ml-2 mt-[1px] text-sm font-medium font-Poppins text-gray-600'>
                  Active
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChatList />
    </div>
  )
}

export default UserList
