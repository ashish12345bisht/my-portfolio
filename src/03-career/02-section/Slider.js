import React from 'react'
import Slide from './Slide'
import { data } from './data'

function Slider({index}) {
    return (
        <div className="slider">
            {data.map((slide)=>{
                //console.log(slide.id);
                return <Slide key={slide.id} slide={slide} index={index}/>
            })}
        </div>
    )
}

export default Slider
