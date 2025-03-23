import React from 'react'
import { MouseEventHandler } from 'react'

export const Button = ({ className , ButtonName = "Button" , onClick } : {className?: string, ButtonName : string , onClick : MouseEventHandler<HTMLButtonElement>}) => {
  return (
      <button onClick={onClick} className={`w-48 h-14 justify-center content-center  bg-blue-primary hover:cursor-pointer hover:bg-blue-accent rounded-md ${className}`}>
          <div className='text-bg-white font-urbanist font-semibold text-[20px] leading-8 '>{ButtonName}</div>
      </button>
  )
}
