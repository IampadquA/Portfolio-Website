import React from 'react'
import PropTypes from 'prop-types'

export const PresentationCard = ({className , discription = false , text}) => {
  return (
    <div className={`flex flex-col gap-3 w-full  ${className}`}>
        <div className='w-full h-full rounded-lg bg-placeholder'>

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
    text : PropTypes.string
}
