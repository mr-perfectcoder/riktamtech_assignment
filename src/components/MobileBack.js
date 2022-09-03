import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate, useParams } from 'react-router-dom'
const MobileBack = ({ image, user }) => {
  const navigate = useNavigate()
  let { username } = useParams()
  return (
    <div className='lg:hidden sm:show xs:show fixed w-full z-50 top-0'>
      <div className='h-14 bg-blue-400 '>
        <div className='flex'>
          <div className='mt-4 ml-4'>
            <BiArrowBack
              size={24}
              color={'white'}
              className='cursor-pointer'
              onClick={() => navigate(-1)}
            />
          </div>
          <div>
            {username ? (
              <div className='h-8 w-8 bg-white rounded-full items-center justify-center ml-2 cursor-pointer'>
                <img
                  src={image}
                  className='mt-3'
                  alt=''
                  onClick={() => navigate('/detail/' + user)}
                />
              </div>
            ) : (
              <div>
                <p className='mt-[16px] ml-2 font-Poppins text-white'>Back</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileBack
