import React from 'react'
import { useState, useEffect } from 'react'

function Tab({ item, index }) {
    const { id, company, job, info } = item;
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {

        if (index === id) {
            setIsVisible(true);
        }
        else {
            setIsVisible(false);
        }
    }, [index, id])
    return (
        <>
            {isVisible && (
                <div className="tabs-2">
                    <h2>{company}</h2>
                    <h4>{job}</h4>
                    <ul className='list-container'>
                        {info?.map((item, ind) => (
                            <li key={ind}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}

        </>
    )
}

export default Tab
