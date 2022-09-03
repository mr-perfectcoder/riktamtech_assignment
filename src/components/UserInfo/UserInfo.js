import React, { useEffect } from 'react'
import { FiMail } from 'react-icons/fi'
import {
  BiUserCircle,
  BiTimeFive,
  BiMessageAltX,
  BiLinkAlt,
} from 'react-icons/bi'
import { TbArchive, TbUsers, TbCalendarEvent } from 'react-icons/tb'
import { useSelector, useDispatch } from 'react-redux'
import MobileBack from '../MobileBack'
import {
  getMessage,
  getUsers,
  selectUsers,
  statusUpdate,
} from '../../features/users/userSlice'
import { useParams } from 'react-router-dom'

const UserInfo = () => {
  let { user } = useParams()
  const users = useSelector(selectUsers)
  const dispatch = useDispatch()
  useEffect(() => {
    if (user) {
      dispatch(getMessage(user))
    }
  }, [user])

  const changeStatus = (status) => {
    console.log(status)
    dispatch(
      statusUpdate({ status: status, username: users.messages[0].username })
    )
    dispatch(getUsers('active'))
    dispatch(getUsers('archived'))
    dispatch(getMessage(users.messages[0].username))
  }

  return (
    <div className='lg:overflow-y-scroll fullHeight scrollBar'>
      <MobileBack />
      <div className=''>
        <div className='p-2'>
          <div className='box-border h-56 w-full p-4 bg-indigo-50 rounded-[15px] border-2 pt-4 sm:mt-14 xs:mt-14 lg:mt-0 '>
            <div className='grid place-items-center'>
              <div className=''>
                <img
                  src={window.location.origin + '/' + users.messages[0].image}
                  className='w-[90px] h-[90px]'
                  alt=''
                />
              </div>
            </div>
            <div>
              <div className='flex items-center mt-3'>
                <div>
                  <FiMail size={20} className='text-gray-600' />
                </div>
                <div className='ml-2'>
                  <p className='font-Poppins text-xs font-semibold text-gray-600'>
                    {users.messages[0].email}
                  </p>
                </div>
              </div>
              <div className='flex items-center mt-2'>
                <div>
                  <BiUserCircle size={20} className='text-gray-600' />
                </div>
                <div className='ml-2'>
                  <p className='font-Poppins text-xs font-semibold text-gray-600'>
                    {users.messages[0].name}
                  </p>
                </div>
              </div>
            </div>
            <div className='flex justify-center mt-2'>
              {users.messages[0].status === 'active' ? (
                <button
                  className='border-2  w-28 h-10 bg-white    border-[#1c56f3] rounded-md'
                  onClick={() => changeStatus('archived')}
                >
                  <div className='flex justify-center items-center'>
                    <div>
                      <p className='text-[#1c56f3] font-Poppins text-xs font-semibold'>
                        Archive
                      </p>
                    </div>
                    <div>
                      <TbArchive className='text-[#1c56f3] font-Poppins ml-1' />
                    </div>
                  </div>
                </button>
              ) : (
                <button
                  className='border-2  w-28 h-10 bg-white  border-[#1c56f3] rounded-md'
                  onClick={() => changeStatus('active')}
                >
                  <div className='flex justify-center items-center'>
                    <div>
                      <p className='text-[#1c56f3] font-Poppins text-xs font-semibold'>
                        Active
                      </p>
                    </div>
                    <div>
                      <TbArchive className='text-[#1c56f3] font-Poppins ml-1' />
                    </div>
                  </div>
                </button>
              )}
            </div>
          </div>

          {/* Activity Section */}
          <div className='box-border h-auto w-full p-4 bg-white rounded-[15px] border-2 pt-5 mt-5'>
            <div className='flex flex-wrap'>
              <div className='w-[45%] bg-indigo-200 h-14 p-2 rounded-2xl'>
                <div className='flex items-center '>
                  <div className='mt-[2px]'>
                    <div className='w-[36px] h-[36px] bg-indigo-300 rounded-full p-1'>
                      <BiTimeFive className='text-[#1c56f3]  ' size={30} />
                    </div>
                  </div>
                  <div className='ml-1'>
                    <p className='text-[#1c56f3]  font-Poppins font-extrabold text-sm '>
                      13h
                    </p>
                    <p className='-mt-1 text-[10px] font-Poppins font-semibold text-gray-500'>
                      Time
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-[45%] bg-green-100 h-14 p-2 rounded-2xl ml-5'>
                <div className='flex items-center '>
                  <div className='mt-[2px]'>
                    <div className='w-[36px] h-[36px] bg-green-200 rounded-full p-1'>
                      <TbUsers
                        className='text-green-500  ml-1 mt-1'
                        size={22}
                      />
                    </div>
                  </div>
                  <div className='ml-1'>
                    <p className='text-green-500 font-Poppins font-extrabold text-sm'>
                      188
                    </p>
                    <p className='-mt-1 text-[10px] font-Poppins font-semibold text-gray-500'>
                      Atended
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-[45%] bg-purple-100 h-14 p-2 rounded-2xl mt-5'>
                <div className='flex items-center '>
                  <div className='mt-[2px]'>
                    <div className='w-[36px] h-[36px] bg-purple-200 rounded-full p-1'>
                      <TbCalendarEvent
                        className='text-purple-500  ml-1 mt-1'
                        size={22}
                      />
                    </div>
                  </div>
                  <div className='ml-1'>
                    <p className='text-purple-500 font-Poppins font-extrabold  text-sm'>
                      119
                    </p>
                    <p className='-mt-1 text-[10px] font-Poppins font-semibold text-gray-500 '>
                      Meetings
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-[45%] bg-orange-100 h-14 p-2 rounded-2xl ml-5 mt-5'>
                <div className='flex items-center '>
                  <div className='mt-[2px]'>
                    <div className='w-[36px] h-[36px] bg-orange-200 rounded-full p-1'>
                      <BiMessageAltX
                        className='text-orange-500  ml-1 mt-1'
                        size={22}
                      />
                    </div>
                  </div>
                  <div className='ml-1'>
                    <p className='text-orange-500 font-Poppins font-extrabold text-sm '>
                      41
                    </p>
                    <p className='-mt-1 text-[10px] font-Poppins font-semibold text-gray-500'>
                      Rejected
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-2 flex items-center justify-between'>
              <div>
                <p className='font-Poppins text-gray-700 font-semibold'>
                  Current Week
                </p>
              </div>
              <div>
                <p className='font-Poppins text-gray-500 text-sm'>Activity</p>
              </div>
            </div>
            <div className='mt-2 flex justify-between '>
              <div className=''>
                <div className='ml-[15px]'>
                  <div className='w-2 h-16 mt-4 rounded-md bg-indigo-200 '></div>
                  <div className='w-2 h-2  bg-indigo-200 rounded mt-2'></div>
                </div>

                <p className='text-sm'>MON</p>
              </div>
              <div className=''>
                <div className='ml-[10px]'>
                  <div className='w-2 h-20 rounded-md bg-[#1c56f3] '></div>
                  <div className='w-2 h-2  bg-[#1c56f3] rounded mt-2'></div>
                </div>
                <p className='text-sm'>TUE</p>
              </div>
              <div className=''>
                <div className='ml-[10px]'>
                  <div className='w-2 h-16 mt-4 rounded-md bg-indigo-200 '></div>
                  <div className='w-2 h-2  bg-indigo-200 rounded mt-2'></div>
                </div>
                <p className='text-sm'>WED</p>
              </div>
              <div className=''>
                <div className='ml-[10px]'>
                  <div className='w-2 h-14 mt-6 rounded-md bg-indigo-200 '></div>
                  <div className='w-2 h-2  bg-indigo-200 rounded mt-2'></div>
                </div>
                <p className='text-sm'>THU</p>
              </div>
              <div className=''>
                <div className='ml-[8px]'>
                  <div className='w-2 h-12 mt-8 rounded-md bg-indigo-200 '></div>
                  <div className='w-2 h-2  bg-indigo-200 rounded mt-2'></div>
                </div>
                <p className='text-sm'>FRI</p>
              </div>

              <div className=''>
                <div className='ml-[10px]'>
                  <div className='w-2 h-8 mt-12 rounded-md bg-indigo-200 '></div>
                  <div className='w-2 h-2  bg-indigo-200 rounded mt-2'></div>
                </div>
                <p className='text-sm'>SAT</p>
              </div>
              <div className=''>
                <div className='ml-[10px]'>
                  <div className='w-2 h-12 mt-8 rounded-md bg-indigo-200 '></div>
                  <div className='w-2 h-2  bg-indigo-200 rounded mt-2'></div>
                </div>
                <p className='text-sm'>SUN</p>
              </div>
            </div>
          </div>

          {/* OnBording Client */}
          <div className='mt-5'>
            <div className='box-border h-auto w-full p-4 bg-blue-50 rounded-[15px] border-2 pt-5'>
              <h2 className='font-Poppins  text-lg font-bold text-center mb-3'>
                Onboard Clients
              </h2>
              <p className=' font-Poppins text-md text-center text-gray-500 '>
                Share the link with prospcets and discuss all stuff
              </p>
              <div className='flex justify-center mt-3'>
                <button className='border-2  w-28 h-10 bg-[#1c56f3]   rounded-md'>
                  <div className='flex justify-center items-center'>
                    <div>
                      <p className='text-white font-Poppins text-xs font-semibold'>
                        Copy Link
                      </p>
                    </div>
                    <div>
                      <BiLinkAlt className='text-white font-Poppins ml-1' />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
