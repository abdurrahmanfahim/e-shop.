import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-[1520px] mx-auto px-2 lg:px-0 '>
      {children}
    </div>
  )
}

export default Container