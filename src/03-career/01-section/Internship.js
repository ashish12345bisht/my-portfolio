import React from 'react'
import { useState } from 'react'
import Intern from './Intern'
import { data } from './data'
//import './Tabs.css'
import './Internship.css'

function Tabs() {
    const [index, setIndex] = useState(0);
    return (
        <>
            <h1 class="section-heading spinner">Careers</h1>
            <section className="up-tabs">
                <div className="buttons-2">
                    {data.map((item) => {
                        return <button className={`${(item.id === index) ? "selected-2" : "tabbuttons-2"}`} onClick={() => setIndex(item.id)}>{item.company}</button>
                    })}
                </div>
                <div className="tabs-container-2">
                    {data.map((item) => {
                        return <Intern key={item.id} item={item} index={index} />
                    })}
                </div>
            </section>
        </>
    )
}

export default Tabs
