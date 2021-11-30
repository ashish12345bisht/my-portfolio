import React from 'react'
import {data} from './data'
import School from './School'
import './Schools.css'

function Schools() {
    return (
        <section>
        <h2 className="section-heading">My Schools</h2>
        <div className="schools">
            
            {data.map((item)=>{
                return <School key={item.id} item={item}/>
            })}
        </div>
        </section>
    )
}

export default Schools
