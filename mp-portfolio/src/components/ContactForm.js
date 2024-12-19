"use client";

import React, { useState } from 'react'
import { Input } from './Input'
import { Button } from './Button'
import TextAreaRe from './TextAreaRe'

export const ContactForm = ({ className , setIsSubmited }) => {
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [companyValue, setCompanyValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [isEmailValidate, setIsEmailValidate] = useState(false);
  const [messageValue, setMessageValue] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    if(!firstNameValue || !lastNameValue || !companyValue || !emailValue || !messageValue){
      alert('Please fill all the fields');
      return;
    }

    if (!isEmailValidate){
      alert('Email is Invalide');
      return;
    }
    
    try {
      const res = await fetch('/api/contact',{
        method: 'POST',
        body: JSON.stringify({
          firstName: firstNameValue,
          lastName: lastNameValue,
          company: companyValue,
          email: emailValue,
          message: messageValue
        }),
        headers: {
          'content-type': 'application/json'
        }
      });

      if(res.ok){
        setIsSubmited(true);
      }
    }catch (err){
      console.error('Error:', err);
    }

    
  }

  return (
    <form onSubmit={onSubmit} className='w-full flex flex-col gap-16 p-5'>
        <div className='flex flex-col gap-16 md:flex-row md:gap-[72px]'>
            <Input InputName="First Name" PlaceHolder="John" Type="name" inputValue={firstNameValue} setInputValue={setFirstNameValue} className={`w-full ${className}`}/>
            <Input InputName="Last Name" PlaceHolder="Tzu" Type="name" inputValue={lastNameValue} setInputValue={setLastNameValue} className={` w-full ${className}`} />
        </div>
        <div className='flex flex-col gap-16 md:flex-row md:gap-[72px]'>
            <Input InputName="Company" PlaceHolder="SuperHiring Company" Type="company" inputValue={companyValue} setInputValue={setCompanyValue} className={`w-full ${className}`} />
            <Input InputName="Email" PlaceHolder="JhonTzu@companyname.co" Type="email" inputValue={emailValue} setInputValue={setEmailValue} setIsValid={setIsEmailValidate} className={`w-full ${className}`}/>
        </div>
        <TextAreaRe InputName="Message" PlaceHolder="I realy like your work!" Type="text" inputValue={messageValue} setInputValue={setMessageValue} className={`${className}`}/>
        <Button ButtonName="Send Contact" />
    </form>
  )
}
