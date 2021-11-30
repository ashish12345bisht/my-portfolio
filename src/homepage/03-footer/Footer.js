import React from 'react'
import Links from '../01-header/Links'
import Acknowledgement from './Acknowledgement'
import './Footer.css'

function Footer({setValue}) {
    return (
        <div className="footer">
            <div className="left">
                <Links setValue={setValue}/>
                <img className="logo" src="../00-images/logo.jpg" alt="logo"/>
            </div>
            <Acknowledgement/>
        </div>
    )
}

export default Footer
