import React from 'react'
import { useState } from 'react';

export default function CourseInfoSection({children , text, isMobile}: {children?: React.ReactNode, text: string, isMobile?: boolean}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const truncatedText = text.slice(0, 50);
    const shouldTruncate = isMobile && text.length > 50 && !isExpanded;
  
    return (
    <div className='relative flex flex-col '>
        <div className='w-full h-fit flex items-end '>
            <span className='relative left-0.5 top-0.5'>
                <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M64 64.3335V0.333496C64 35.6797 35.3462 64.3335 0 64.3335H64Z" fill="#F2F2F2"/>
                </svg>
            </span>
            <div className='w-full h-full flex items-center justify-center px-4 py-6 bg-bg-white rounded-t-lg'>
                {shouldTruncate ? 
                <label>
                    <label className='font-urbanist font-semibold text-base sm:text-xl leading-8 '>
                        {truncatedText}
                        ...
                        <button
                        onClick={() => setIsExpanded(true)}
                        className="font-urbanist font-semibold text-base sm:text-xl leading-8 text-blue-primary hover:text-blue-accent inline-block"
                        >
                        Click for more
                        </button>
                    </label>
                </label>
                :
                <label className='font-urbanist font-semibold text-base sm:text-xl leading-8 '>
                    {text}
                </label>}
            </div>
            <span className='relative right-0.5 top-0.5'>
                <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 64.3335H64C28.6538 64.3335 0 35.6797 0 0.333496V64.3335Z" fill="#F2F2F2"/>
                </svg>
            </span>
        </div>
        <div className='w-full h-fit flex gap-[10px] bg-bg-white relative top-[-1px] '>
            {children}
        </div>
    </div>
  )
}
