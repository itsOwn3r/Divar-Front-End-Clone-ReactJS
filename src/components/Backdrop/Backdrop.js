import React from 'react'

const Backdrop = ({children}) => {
  return (
    <div className='w-[100%] h-[100vh] z-[105] fixed bg-[#000000ad] top-0 left-0 right-0'>
        {children}
    </div>
  )
}

export default Backdrop