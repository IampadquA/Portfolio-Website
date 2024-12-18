import React from 'react'

export const Button = ({ className , ButtonName = "Button"}) => {
  return (
      <button className={`w-48 h-14 justify-center content-center rounded-md bg-blue-primary hover:cursor-pointer hover:bg-blue-accent ${className}`}>
          <div className='text-bg-white font-urbanist font-semibold text-[20px] leading-8 '>{ButtonName}</div>
      </button>
  )
}
