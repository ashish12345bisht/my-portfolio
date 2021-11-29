import React from 'react'
import {data} from './data'
import Project from './Project'
import './Projects.css'

function Projects() {
    return (
        <>
        <h1 className="section-heading">Some Projects </h1>
        <div className="projects">
            {data.map((item)=>{
                return <Project key={item.id} item={item}/>
            })}
        </div>
        </>
    )
}

export default Projects
