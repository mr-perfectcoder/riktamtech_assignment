import React from 'react'

const UserCard = () => {
  return (
    <div className='flex items-center p-2 hover:bg-blue-50 rounded-2xl hover:font-semibold '>
      <img src='./user2.png' alt='' width={60} className='rounded-full' />
      <p className='font-Poppins text-[12px]'>Hernry Boyd</p>
      <div className='ml-12'>
        <div className='flex w-4 h-4 bg-red-500 rounded-full items-center justify-center text-white '>
          <p className='text-xs'>5</p>
        </div>
      </div>
    </div>
  )
}

export default UserCard