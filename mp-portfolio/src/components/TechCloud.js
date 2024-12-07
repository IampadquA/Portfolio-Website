import React from 'react'

export const TechCloud = () => {

    const text = "Click tech interest you and get information about how much i know about that tech"
    
    return (
        <div className='w-full py-7'>
            <div className='w-full flex flex-col gap-7'>
                <h3 className='font-urbanist font-semibold text-[18px] leading-[26px] text-center p-3'>Here is my tech cloud</h3>
                <div></div>
                <label className='font-urbanist font-semibold text-[18px] leading-[26px] px-14'>{text}</label>
            </div>
        </div>
      )
}
