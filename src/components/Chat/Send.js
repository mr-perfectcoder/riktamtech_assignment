import React from 'react'
import { RiAttachment2 } from 'react-icons/ri'
import { BsEmojiSmile } from 'react-icons/bs'
import { IoMdSend } from 'react-icons/io'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getMessage, sendMessage } from '../../features/users/userSlice'
const Send = ({ endOfMessagesRef, username }) => {
  const [value, setvalue] = useState('')
  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()
    if (!value) {
      alert('Please enter your message')
    } else {
      dispatch(
        sendMessage({ message: value, username: username, sender: 'bill' })
      )
      dispatch(getMessage(username))
      endOfMessagesRef.current.scrollIntoView({ behavoir: 'smooth' })
      setvalue('')
    }
  }

  return (
    <div className='h-[70px] w-full box-border bg-white rounded-xl   bottom-0   shadow-lg'>
      <form>
        <div className='flex  pl-5 pt-4 pr-5 items-center'>
          <div className='flex w-10'>
            <RiAttachment2 size={26} className='text-gray-500' />
          </div>
          <div className='w-[85%]'>
            <label className='relative block'>
              <input
                className='placeholder:font-Poppins placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-9 shadow-sm focus:outline-none  focus:none focus:ring-1 sm:text-sm'
                placeholder='Enter your message here'
                type='text'
                name='search'
                value={value}
                onChange={(e) => {
                  setvalue(e.target.value)
                }}
              />
              <span className='absolute inset-y-0 right-0 pr-3 flex items-center pl-2'>
                <BsEmojiSmile className='text-yellow-500' />
              </span>
            </label>
          </div>
          <div>
            <button
              className='bg-[#1c56f3] w-20 h-9 rounded-md text-white ml-3'
              onClick={onSubmit}
              type='submit'
            >
              <div className='flex items-center justify-center'>
                <p>Send</p>
                <p className='ml-1 mt-[2px]'>
                  <IoMdSend />
                </p>
              </div>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Send
