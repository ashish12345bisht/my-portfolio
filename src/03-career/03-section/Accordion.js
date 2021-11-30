import React from 'react'
import Accord from './Accord'
import {data} from './data'
import './Accordion.css'

function Accordion() {
    return (
        <>
        <h1 className="section-heading spinner">Internship Certificates</h1>
        <div className="accordion-container">
            {data.map((item)=>{
                return <Accord item={item}/>
            })}
        </div>
        </>
    )
}

export default Accordion
