import React from 'react'
import { Input } from './Input'
import { Button } from './Button'

export const ContactForm = ({ className }) => {
  return (
    <div className='w-full flex flex-col gap-16 p-5'>
        <div className='flex flex-col gap-16 md:flex-row md:gap-[72px]'>
            <Input InputName="First Name" PlaceHolder="John" Type="name" className={`w-full ${className}`}/>
            <Input InputName="Last Name" PlaceHolder="Tzu" Type="name"className={` w-full ${className}`} />
        </div>
        <div className='flex flex-col gap-16 md:flex-row md:gap-[72px]'>
            <Input InputName="Company" PlaceHolder="SuperHiring Company" Type="company"className={`w-full ${className}`} />
            <Input InputName="Email" PlaceHolder="JhonTzu@companyname.co" Type="email" className={`w-full ${className}`}/>
        </div>
        <Input InputName="Message" PlaceHolder="I realy like your work!" Type="text" className={`${className}`}/>
        <Button ButtonName="Send Contact" />
    </div>
  )
}
