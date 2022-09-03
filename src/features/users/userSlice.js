import {  createSlice } from '@reduxjs/toolkit'
import data from '../../data/data.json'
const initialState = {
  users: data,
  activeUser: [],
  archivedUser: [],
  messages: [data[0]],
  status: 'idle',
}

export const userSlice = createSlice({
  name: 'userdata',
  initialState,
  reducers: {
    getUsers: (state, action) => {
      if (action.payload === 'active') {
        state.activeUser = state.users.filter((item) => {
          if (item.status === action.payload) {
            return item
          }
        })
      }
      if (action.payload === 'archived') {
        state.archivedUser = state.users.filter((item) => {
          if (item.status === action.payload) {
            return item
          }
        })
      }
    },
    getMessage: (state, action) => {
      if (action.payload) {
        state.messages = state.users.filter((item) => {
          if (item.username === action.payload) {
            return { ...item }
          }
        })
      }
    },
    sendMessage: (state, action) => {
      const { message, username, sender } = action.payload
      state.users.map((item) => {
        if (item.username === username) {
          item.messages.push({
            message: message,
            username: sender,
            createdAt: new Date().toLocaleString(),
          })
        }
      })
    },
    statusUpdate: (state, action) => {
      const { username, status } = action.payload
      console.log(action)
      state.users.map((item) => {
        if (item.username === username) {
          item.status= status
        }
      })
    },
  },
})

export const { getUsers, getMessage, sendMessage, statusUpdate } = userSlice.actions

export const selectUsers = (state) => state.userdata

export default userSlice.reducer
