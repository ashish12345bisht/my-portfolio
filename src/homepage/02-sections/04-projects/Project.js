import React from 'react'

function Project({item}) {
    const {name,info, url}=item;
    return (
        <div className="project">
            <iframe scrolling="no" src={url}>{name}</iframe>
            <div class="right">
                <h3>{name}</h3>
                <button className="project-button"><a href={url}>Go To Full Project</a></button>
                <p>{info}</p>
            </div>

        </div>
    )
}

export default Project
