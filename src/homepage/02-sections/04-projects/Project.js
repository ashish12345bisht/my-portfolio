import React from 'react'

function Project({item}) {
    const {id, name,info, url}=item;
    return (
        <div className="project">
            <iframe scrolling="no" src={url} title={id} className="iframes">{name}</iframe>
            <div class="right">
                <h3>{name}</h3>
                <button className="project-button"><a href={url}>Go To Full Project</a></button>
                <p>{info}</p>
            </div>

        </div>
    )
}

export default Project
