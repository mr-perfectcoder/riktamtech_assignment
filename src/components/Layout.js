import React from 'react'
import FullScreen from './FullScreen'
import MobileView from './MobileView'

const Layout = () => {
 
  return (
    <div>
      <div className='lg:block hidden '>
        <FullScreen />
      </div>
      <div className='sm:block hidden xs:block lg:hidden'>
        <MobileView />
      </div>
    </div>
  )
}

export default Layout