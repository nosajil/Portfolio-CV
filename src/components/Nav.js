import React from 'react'
import '../sass/Nav.scss'
import { useState } from 'react'

const Nav = () => {

    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    console.log(showLinks);

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
            <div className="navbar-logo">JL</div>
            <ul className="navbar-links">
                <li className="navbar-item slideInDown1">
                    <a href="" className="navbar-link">
                        Accueil
                    </a>
                </li>
                <li className="navbar-item slideInDown2">
                    <a href="" className="navbar-link">
                        A propos
                    </a>
                </li>
                <li className="navbar-item slideInDown3">
                    <a href="" className="navbar-link">
                        Portfolio
                    </a>
                </li>
                <li className="navbar-item slideInDown4">
                    <a href="" className="navbar-link">
                        Projets
                    </a>
                </li>
                <li className="navbar-item slideInDown5">
                    <a href="" className="navbar-link">
                        Contact
                    </a>
                </li>
            </ul>
            <button onClick={handleShowLinks} className="navbar-burger">
                <span className="burger-bar"></span>
            </button>
    </nav>
  )
}

export default Nav