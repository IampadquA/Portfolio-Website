import Link from 'next/link'
import React from 'react'
import { CallMeHand } from './CallMeHand';

export const Footer = () => {
  const socialLinks = [
    {
      name: 'Email',
      link: "mailto:tefegulmez@gmail.com?subject=Hello%20Tarık"
    },
    {
      name: 'GitHub',
      link: "https://github.com/IampadquA"
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/tarikefegulmez'
    },
  ];

  const routerLinks =
  [
    // "LandPage",
    // "About Me",
    // "Projects",
    // "Techs",
    // "Contact"
  ]

  return (
    <div className='relative w-full pt-[72px] bg-text-p2'>
      <hr className='w-full h-[2px] bg-bg-white' />
        <div className='flex flex-col lg:flex-row'>
            <div className='w-full flex flex-col gap-3 px-12 py-9 font-Onest font-bold text-[44px] xl:text-[64px] leading-[56px] tracking-[-2%] text-bg-white'>
                <h2>Want to work with me ?</h2>
                <div className='w-full flex items-center gap-5'>
                    <h2 className=' underline'>Get in Touch</h2>
                    <CallMeHand />
                </div>
            </div>
            <div className='relative w-full lg:w-2/4  flex py-5 px-16 sm:px-20 md:pl-[400px] lg:pl-0 justify-between'>
                <div className='flex flex-col gap-3 font-urbanist font-normal text-sm md:text-base leading-6 text-bg-white'>
                {socialLinks.map((socialLink, index) => (
                    <Link href={socialLink.link} key={index} target="_blank" rel="noopener noreferrer">
                    <span className=' text-bg-white hover:text-text-p1'>
                        {socialLink.name}
                    </span>
                    </Link>
                ))}
                </div>
                <div className='flex flex-col gap-2 font-urbanist font-normal text-sm leading-6 text-bg-white'>
                {routerLinks.map((routerLinks, index) => (
                    <span key={index} className=' text-bg-white'>{routerLinks}</span>
                ))}
                </div>
            </div>
        </div> 
      <div className='relative w-full p-3 content-center font-urbanist font-normal text-sm md:text-base leading-6 text-bg-white'>
        <label>Coded By IampadquA &copy; 2024 Personel Usage  |</label>
      </div>
    </div>
  );
}
