import React from 'react'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
const CollpaseIcon = ({ active }) => {
  return <div>{active ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
}

export default CollpaseIcon
