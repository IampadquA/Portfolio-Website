import React from 'react'

export const Button = ({ className }) => {
  return (
    <button className={`w-48 h-14 justify-center content-center rounded-md bg-blue-primary ${className}`}>
        <label className='text-bg-white font-urbanist font-semibold text-[20px] leading-8 '>Button</label>
    </button>
  )
}
