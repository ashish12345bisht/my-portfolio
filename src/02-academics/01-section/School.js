import React from 'react'

function School({item}) {
    const {name, url, info}=item;
    return (
        <div className="school">
            <iframe src={url} title={name}></iframe>
            <h3>{name}</h3>
            <p>{info}</p>
            <button className="school-btn"><a href={url}>Visit Site</a></button>
        </div>
    )
}

export default School
