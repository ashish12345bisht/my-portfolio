import React from 'react'
import Tablerow from './Tablerow'
import Arow from './Arrow';

function Entry({item}) {
    const {id, name, marks, yop, stream} = item;
    return (
        <>
            <tr>
            <Tablerow text={id}/>
            <Arow/>
            <Tablerow text={name}/>
            <Arow/>
            <Tablerow text={marks}/>
            <Arow/>
            <Tablerow text={yop}/>
            <Arow/>
            <Tablerow text={stream}/>
            </tr>
        </>
    )
}

export default Entry
