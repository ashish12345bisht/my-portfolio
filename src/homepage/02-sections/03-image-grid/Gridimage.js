import React from 'react'

function Gridimage({ item }) {
    const { name, link } = item;
    return (
        <div className="image">
            <div className='image-wrapper'>
                <img src={link} alt={name} />
            </div>
            <h3>{name}</h3>
        </div>
    )
}

export default Gridimage
