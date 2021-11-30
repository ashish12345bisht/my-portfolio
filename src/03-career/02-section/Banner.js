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
            setIndex(3);
        }
        else if(curIndex>3){
            setIndex(0);
        }
    },[index])
    useEffect(()=>{
        let slider = setInterval(()=>{
            setIndex(index+1);
        },5000)
        return ()=>clearInterval(slider);
    },[index]);
    return (
        <div className="banner">
            <button className="slider-btn-left" onClick={()=>setIndex(index-1)}><BiChevronLeft/></button>
            <Slider index={index}/>
            <button className="slider-btn-right" onClick={()=>setIndex(index+1)}><BiChevronRight/></button>
        </div>
    )
}

export default Banner
