import React from 'react'
import { PresentationCard } from './PresentationCard'

export const PresantationGrid = ({ className , isDesktop }) => {

    const tablet = (
    <div className= {`grid grid-cols-6 grid-rows-4 w-full ${className} `}>
      <PresentationCard className='row-span-2 col-span-2 p-3 '/>
      <PresentationCard className='row-start-3 row-span-2 col-span-2 p-3  '/>
      <PresentationCard className='row-span-1 col-span-3 p-3 '/>
      <PresentationCard className='row-span-3 col-span-3 p-3 '/>
      <PresentationCard className='row-start-1 col-start-6 row-span-4 col-span-1 p-3 '/>   
    </div>
    )

    const desktop = (
    <div className= {`grid grid-cols-6 grid-rows-4 w-full ${className} `}>
      <PresentationCard className='row-span-1 col-span-3 p-3 '/>
      <PresentationCard className='row-span-1 col-span-3 p-3  '/>
      <PresentationCard className='row-span-2 col-span-1 p-3 '/>
      <PresentationCard className='row-span-2 col-span-4 p-3 '/>
      <PresentationCard className='row-start-4 row-span-1 col-span-1 p-3 '/>
      <PresentationCard className='row-span-1 col-span-5 p-3 '/>   
    </div>
    )
  return (
    <>
        {isDesktop ? desktop : tablet}
    </>
  )
}