import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { AfterSubmit } from './AfterSubmit';
import { ContactForm } from './ContactForm';

export const ContactPage = () => {

    const [isSubmited, setIsSubmited] = useState(false);
  return (
    <div className='relative w-screen md:h-screen flex flex-col gap-12 px-7 sm:px-20 py-9 my-9'>
            <div className='relative flex gap-3 content-center'>
                <motion.div>
                    <motion.svg
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={ {opacity: 1 , x: 0 }}
                    transition={{ delay: 1 ,duration: 1 }}
                    width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 8L0.5 15.7942L0.5 0.205772L14 8Z" fill="black"/>
                    </motion.svg>
                </motion.div>
                <label className='font-urbanist font-semibold text-xs sm:text-xl text-center'>so this is the end of the our tour. I hope you like it </label>
            </div>
            <div className='w-full flex flex-col lg:flex-row gap-4 justify-items-center'>
                <div className='flex flex-col lg:w-2/4'>
                    <div className='w-full flex flex-col md:flex-row lg:flex-col md:gap-2 lg:gap-6 md:items-center lg:items-start gap-7 justify-items-center'>
                        <label className='font-urbanist font-semibold text-base sm:text-2xl md:text-xl text-right md:text-left lg:w-3/4  '>if you are interested what you see</label>
                        <div className='font-Onest font-bold text-[44px] sm:text-[64px] leading-[48px] sm:leading-[56px] tracking-[-2%] text-center md:text-left'>
                        Get Contact 
                        With Me
                        </div>
                    </div>
                    <div className='w-full flex flex-col gap-7 justify-items-center py-6 font-urbanist font-semibold text-sm sm:text-xl text-center lg:text-left '>
                        <label className='w-full lg:w-2/3'>Reach out directly at <Link className='hover:text-blue-accent' href="mailto:tefegulmez@gmail.com?subject=Hello%20Tarık" target='_blank'>tarikefegulmez@gmail.com</Link></label>
                        <label className='w-full font-normal'>or</label>
                        <div className='flex gap-2 content-center lg:justify-start w-full justify-center'>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_44_1150)">
                                    <path d="M19.0236 0H1.97639C1.58483 0 1.2093 0.155548 0.932425 0.432425C0.655548 0.709301 0.5 1.08483 0.5 1.47639V18.5236C0.5 18.9152 0.655548 19.2907 0.932425 19.5676C1.2093 19.8445 1.58483 20 1.97639 20H19.0236C19.4152 20 19.7907 19.8445 20.0676 19.5676C20.3445 19.2907 20.5 18.9152 20.5 18.5236V1.47639C20.5 1.08483 20.3445 0.709301 20.0676 0.432425C19.7907 0.155548 19.4152 0 19.0236 0ZM6.46111 17.0375H3.45417V7.48611H6.46111V17.0375ZM4.95556 6.1625C4.61447 6.16058 4.2816 6.05766 3.99895 5.86674C3.71629 5.67582 3.49653 5.40544 3.3674 5.08974C3.23826 4.77404 3.20554 4.42716 3.27336 4.09288C3.34118 3.7586 3.5065 3.4519 3.74846 3.21148C3.99042 2.97107 4.29818 2.80772 4.63289 2.74205C4.9676 2.67638 5.31426 2.71133 5.62913 2.84249C5.94399 2.97365 6.21295 3.19514 6.40205 3.47901C6.59116 3.76288 6.69194 4.09641 6.69167 4.4375C6.69488 4.66586 6.65209 4.89253 6.56584 5.104C6.47959 5.31547 6.35165 5.50742 6.18964 5.66839C6.02763 5.82936 5.83487 5.95607 5.62285 6.04096C5.41083 6.12585 5.18389 6.16718 4.95556 6.1625ZM17.5444 17.0458H14.5389V11.8278C14.5389 10.2889 13.8847 9.81389 13.0403 9.81389C12.1486 9.81389 11.2736 10.4861 11.2736 11.8667V17.0458H8.26667V7.49306H11.1583V8.81667H11.1972C11.4875 8.22917 12.5042 7.225 14.0556 7.225C15.7333 7.225 17.5458 8.22083 17.5458 11.1375L17.5444 17.0458Z" fill="#0A66C2"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_44_1150">
                                        <rect width="20" height="20" fill="white" transform="translate(0.5)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <label><Link className='hover:text-blue-accent' href="https://www.linkedin.com/in/tarikefegulmez" target='_blank'>Tarik Efe Gülmez</Link></label>
                        </div>
                    </div>
                </div>
                <div className='relative w-full '> 
                    { isSubmited ? <AfterSubmit/> : <ContactForm className="text-center md:text-left" setIsSubmited={setIsSubmited} />}
                </div>
            </div>


    </div>
  )
}

export default ContactPage;
