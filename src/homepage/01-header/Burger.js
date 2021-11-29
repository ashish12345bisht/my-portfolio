import React from 'react'
import {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa';
import Links from './Links';

function Burger() {
    const [clicked, setClicked]=useState(false);
    const screenSize=window.innerHeight;
    const backup=(screenSize)=>{
        if(screenSize>800){
            setClicked(false);
        }
        console.log("hello")
    }
    useEffect(()=>{
        backup();
    },[screenSize]);
    
    return (
        <>
        <div className="mobile-view">
            <img className="logo" src="../00-images/logo.jpg" alt="ASHISH BISHT"/>
            <button className="mobile-button" onClick={()=>setClicked(!clicked)}><FaBars/></button>
        </div>
        {clicked && <Links clicked={clicked}/>}
        </>
    )
}

export default Burger
