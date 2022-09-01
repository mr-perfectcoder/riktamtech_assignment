import React from 'react'

const UserCard = () => {
  return (
    <div className='flex items-center p-2 hover:bg-blue-50 rounded-2xl hover:font-semibold'>
      <img src='./user2.png' alt='' width={60} className='rounded-full' />
      <h2 className='font-Poppins '>Raju</h2>
      <div className='ml-28 w-6 h-6 bg-red-500 rounded-full pl-2 text-white'>
        <p>5</p>
      </div>
    </div>
  )
}

export default UserCard