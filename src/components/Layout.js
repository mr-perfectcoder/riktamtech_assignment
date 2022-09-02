import React from 'react'
import FullScreen from './FullScreen'

const Layout = () => {
  return (
    <div>
      <div className='lg:visible invisible'>
        <FullScreen />
      </div>
    </div>
  )
}

export default Layout