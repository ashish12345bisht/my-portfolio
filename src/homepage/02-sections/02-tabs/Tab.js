import React from 'react'
import {useState, useEffect} from 'react'

function Tab({item, visible, index}) {
    const {id, company, job, info} = item;
    const [isVisible, setIsVisible]=useState(visible);
    const checker=()=>{
        if(index===id){
            setIsVisible(true);
        }
        else{
            setIsVisible(false);
        }
    }
    useEffect(() => {
        checker();
    }, [index])
    return (
        <>
            {isVisible && (
                <div className="tabs">
                    <h2>{company}</h2>
                    <h4>{job}</h4>
                    <p>{info}</p>
                </div>
            )}
            
        </>
    )
}

export default Tab
