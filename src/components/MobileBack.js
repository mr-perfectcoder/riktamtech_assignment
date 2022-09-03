import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate, useParams } from 'react-router-dom'
const MobileBack = () => {
  const navigate = useNavigate()
  let { username } = useParams()
  return (
    <div className='lg:hidden sm:show xs:show fixed w-full z-50 top-0'>
      <div className='h-10 bg-blue-400 '>
        <div className='flex'>
          <div className='mt-2 ml-4'>
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
                  src='./bill.png'
                  className='mt-1'
                  alt=''
                  
                  onClick={() => navigate('/detail/herny')}
                />
              </div>
            ) : (
              <div>
                <p className='mt-[8px] ml-2 font-Poppins text-white'>Back</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileBack
