import React from 'react'

function Slide({slide,index}) {
    const {id,heading, text}=slide;
    let position='nextSlide';
    if(id===index){
        position='activeSlide';
    }
    if(id===index-1 || (index===0 && id===3)){
        position='prevSlide'
    }
    
    return (
        <div className={`${position} slide`}>
            <h2>{heading}</h2>
            <p>{text}</p>
        </div>
    )
}

export default Slide
