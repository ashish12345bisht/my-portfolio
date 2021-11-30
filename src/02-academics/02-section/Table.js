import React from 'react'
import {data} from './data'
import Tablerow from './Tablerow'
import Entry from './Entry'
import './Table.css'

function Table() {
    return (
        <div>
            <h1 className="section-heading spinner">My Records</h1>
            <table>
                <thead className="headings">
                    <tr>
                        <Tablerow text="Qualification"/>
                        <Tablerow text=""/>
                        <Tablerow text="Name"/>
                        <Tablerow text=""/>
                        <Tablerow text="Marks"/>
                        <Tablerow text=""/>
                        <Tablerow text="YoP"/>
                        <Tablerow text=""/>
                        <Tablerow text="Stream"/>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item)=>{
                        return <Entry item={item}/>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table
