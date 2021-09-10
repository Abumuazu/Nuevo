import React from 'react'
//styles 
import {Image } from './Thumb.styles'

const Thumb = ({image, key, clickable}) => {
    return (
        <div>
        <Image src={image} alt ='movie-thumb' />
    </div>
    )
}
export default Thumb
