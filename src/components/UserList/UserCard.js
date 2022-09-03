import React from 'react'
import {Link} from 'react-router-dom'
const UserCard = ({user}) => {
  return (
    <Link to={'/'+user.username}>
      <div className='flex items-center p-2 hover:bg-blue-50 rounded-2xl hover:font-semibold '>
        <img src={'/'+user.image} alt='' width={60} className='rounded-full' />
        <p className='font-Poppins text-[12px]'>{user.name}</p>
        {/* <div className='ml-12'>
        <div className='flex w-4 h-4 bg-red-500 rounded-full items-center justify-center text-white '>
          <p className='text-xs'>5</p>
        </div>
      </div> */}
      </div>
    </Link>
  )
}

export default UserCard