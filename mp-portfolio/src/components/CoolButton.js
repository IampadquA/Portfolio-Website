import React from 'react'
import { CoolMode } from './CoolMode'

export const CoolButton = ({className , ButtonName , onClick}) => {
  return (
    <CoolMode>
        <button onClick={onClick} className={`w-48 h-14 justify-center content-center rounded-md bg-blue-primary hover:cursor-pointer hover:bg-blue-accent ${className}`}>
            <div className='text-bg-white font-urbanist font-semibold text-[20px] leading-8 '>{ButtonName}</div>
        </button>
    </CoolMode>
  )
}
