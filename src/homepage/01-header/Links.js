import React from 'react'
import {links} from './data';

function Links({clicked, setValue}) {
    return (
        <div className={`${clicked?"mobile-links":"links"}`}>
            <ul>
                {links.map((item)=>{
                    const {id,url,name}=item;
                    return <li key={id}>
                        <a href={url} onClick={()=>setValue(id)}>{name}</a>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Links
