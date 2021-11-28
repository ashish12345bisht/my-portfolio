import React from 'react'
import { useState, useEffect } from 'react';
import Slider from './Slider'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import './Banner.css'


function Banner() {
    const [index, setIndex]=useState(0);
    useEffect(()=>{
        let curIndex=index;
        if(curIndex<0){
            setIndex(2);
        }
        else if(curIndex>=3){
            setIndex(0);
        }
    },[index])
    return (
        <div className="banner">
            <button onClick={()=>setIndex(index-1)}><BiChevronLeft/></button>
            <Slider index={index}/>
            <button onClick={()=>setIndex(index+1)}><BiChevronRight/></button>
        </div>
    )
}

export default Banner
