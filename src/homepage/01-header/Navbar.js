import React from 'react'
import {useState, useEffect} from 'react'
import Burger from './Burger';
import Links from './Links';
import Social from './Social';
import './Navbar.css'

function Navbar() {
    const [isDown, setIsDown]=useState(false);
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY>50){
                setIsDown(true);
            }else{
                setIsDown(false)
            }
        });
        return ()=>window.removeEventListener("scroll")
    }, [])
    return (
        <header className={`${isDown && "down"}`}>
            <Burger/>
            <Links/>
            <Social/>
        </header>
    )
}

export default Navbar
