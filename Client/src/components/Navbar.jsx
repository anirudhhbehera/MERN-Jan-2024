import { NavLink } from "react-router-dom"
import "./css/Navbar.css"

export const Navbar=()=>{
    return(
        <>
            <header>
                <div className="container">
                    <div className="logo-brand">
                        <a href="/">AniTech</a>
                    </div>
                    <nav>
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            <li><NavLink to="/service">Service</NavLink></li>
                            <li><NavLink to="/register">Register</NavLink></li>
                            <li><NavLink to="/login">Login</NavLink></li>
                            <li><a href="https://github.com/anirudhhbehera" target="_blank">Github</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}