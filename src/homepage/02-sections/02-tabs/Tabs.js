import React from 'react'
import { useState } from 'react'
import Tab from './Tab'
import { data } from './data'
import './Tabs.css'

function Tabs() {
    const [index, setIndex] = useState(0);
    return (
        <>
            <h1 class="section-heading spinner">My Internships</h1>
            <div className="buttons">
                {data.map((item) => {
                    return <button className={`${(item.id === index) ? "selected" : "tabbuttons"}`} onClick={() => setIndex(item.id)}>{item.company}</button>
                })}
            </div>
            <div className="tabs-container">
                <Tab item={data[index]} index={index} />
            </div>
        </>
    )
}

export default Tabs
