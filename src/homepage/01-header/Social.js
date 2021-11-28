import React from 'react'
import {social} from './data';

function Social() {
    return (
        <div className="social">
            <ul>
                {social.map((item)=>{
                    const {id, url, icon}=item;
                    return <li key={id}>
                        <a href={url}>{icon}</a>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Social
