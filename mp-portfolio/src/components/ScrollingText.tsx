import React from 'react'
import { motion } from 'framer-motion';
import { ShadeIn } from './ui/ShadeIn';

export default function ScrollingText({
    contents,
    y
}: {
    contents: { title: string, content: string }[],
    y: any
}) {
    console.log(contents);

    return (
        <div className="w-full flex flex-col">
            <motion.div
                className='w-full'
                style={{ y }}
            >
                {contents.map((content, index) => {
                    return (
                        <div className='flex flex-col gap-3 p-4' key={index}>

                            <h1 className='font-Onest font-bold text-2xl'>
                                <ShadeIn>
                                    {content.title}
                                </ShadeIn>
                            </h1>
                            <p  className='font-Onest font-normal text-base lg:text-lg whitespace-pre-line'>
                                <ShadeIn>
                                    {content.content}
                                </ShadeIn>
                            </p>

                        </div>
                    );
                })}
            </motion.div>
        </div>
    )
}