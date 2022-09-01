import React from 'react';
import Chat from './components/Chat/Chat';
import UserInfo from './components/UserInfo/UserInfo';
import UserList from './components/UserList/UserList';
import './App.css'
function App() {
  return (
    <div className='flex p-3 h-full'>
      <UserList />
      <Chat />
      <UserInfo />
    </div>
  )
}

export default App;
