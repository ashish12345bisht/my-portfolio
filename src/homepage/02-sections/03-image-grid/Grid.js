import React from 'react'
import {data} from './data'
import Gridimage from './Gridimage'
import './Grid.css'

function Grid() {
    return (
        <>
            <h1 class="section-heading spinner">My Certificates</h1>
            <div className="image-grid">
                
                {data.map((item)=>{
                    return <Gridimage key={item.id} item={item}/>
                })}
            </div>
        </>
    )
}

export default Grid
