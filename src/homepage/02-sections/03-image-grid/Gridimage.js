import React from 'react'

function Gridimage({item}) {
    const {name, link}=item;
    return (
        <div className="image">
            <img src={link} alt={name}/>
            <h3>{name}</h3>
        </div>
    )
}

export default Gridimage
