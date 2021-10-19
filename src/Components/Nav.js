import React from 'react'
import './Nav.css'

export default function Navbar({ getData }) {

    return (
        <nav className="navbar">
            <div className="max-width">
            <span className="logo">WE Bloggers</span>
            <a class="active" href="\Home.css">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
                
                <button onClick={getData}>Get Users</button>
            </div>
        </nav>
    )
}