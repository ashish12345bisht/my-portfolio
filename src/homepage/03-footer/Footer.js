import React from 'react'
import Links from '../01-header/Links'
import Acknowledgement from './Acknowledgement'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="left">
                <Links/>
                <img className="logo" src="../00-images/logo.jpg"/>
            </div>
            <Acknowledgement/>
        </div>
    )
}

export default Footer
