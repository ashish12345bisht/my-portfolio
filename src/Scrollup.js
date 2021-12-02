import React from 'react'
import {BsArrowUp} from 'react-icons/bs'

function Scrollup() {
    const scrollUp=()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }
    return (
        <button className="scrollButton" onClick={scrollUp}><BsArrowUp/></button>
    )
}

export default Scrollup
