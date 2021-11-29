import React from 'react'
import {useState, useEffect} from 'react'
import Tab from './Tab'
import {data} from './data'
import './Tabs.css'

function Tabs() {
    const [visible, setVisible] = useState(false);
    const [index, setIndex]=useState(0);
    return (
        <>
            <div className="buttons">
                {data.map((item)=>{
                    return <button className="tabbuttons" onClick={()=>setIndex(item.id)}>{item.company}</button>
                })}
            </div>
            <div className="tabs-container">
                {data.map((item)=>{
                    return <Tab key={item.id} item={item} visible={visible} index={index}/>
                })}
            </div>
        </>
    )
}

export default Tabs
