import React from 'react'
import PropTypes from 'prop-types'
import { Safari } from './SafariMockup'

export const PresentationCard = ({className , imgSrc = "/images/TelepathyGameImages/tpmainpage1.png" , alt = "placeholder" , width , height, imgClassName  , discription = false , text}) => {
  return (
    <div className={`flex flex-col gap-3 w-full  ${className}`}>
        <div className='w-full h-full rounded-lg bg-placeholder'>
            <Safari src={imgSrc} width={width} height={height} />
        </div>
        {discription && 
        <div className='border-2 border-bg-black p-3'> 
            <p>{text}</p>
        </div>}
    </div>
  )
}

PresentationCard.propTypes = {
    className : PropTypes.string,
    discription : PropTypes.bool,
    text : PropTypes.string,
    imgSrc : PropTypes.string,
    width : PropTypes.number,
    height : PropTypes.number,
    imgClassName : PropTypes.string
}
