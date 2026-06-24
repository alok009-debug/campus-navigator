import './components-css/Navbar.module.css'
import { useState, useEffect } from "react";

const Navbar = () => {

    return (
        <div>

            <ul className="navbar">
                <li><a href="http://">Home</a></li>
                <li><a href="">All campuses</a></li>
                <li><a href="">Report location</a></li>
            </ul>
        </div>
    )
}

export default Navbar
