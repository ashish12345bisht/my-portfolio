import React from 'react'
import Burger from './Burger';
import Links from './Links';
import Social from './Social';
import './Navbar.css'

function Navbar() {
    return (
        <header>
            <Burger/>
            <Links/>
            <Social/>
        </header>
    )
}

export default Navbar
