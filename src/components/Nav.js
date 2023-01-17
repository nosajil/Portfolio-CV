import React from 'react'
import '../sass/Nav.scss'
import { useState } from 'react'
import { HashLink as Link } from 'react-router-hash-link';


const Nav = () => {

    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
            <div className="navbar-logo">JL</div>
            <ul className="navbar-links">
                <li className="navbar-item slideInDown1">
                    <Link 
                    to="#accueil" 
                    smooth 
                    className="navbar-link">
                        Accueil
                    </Link>
                </li>
                <li className="navbar-item slideInDown2">
                    <Link 
                    to="#description" 
                    smooth 
                    className="navbar-link">
                        A propos
                    </Link>
                </li>
                <li className="navbar-item slideInDown3">
                    <Link 
                    to='#skills' 
                    smooth 
                    className="navbar-link">
                        Compétences
                    </Link>
                </li>
                <li className="navbar-item slideInDown4">
                    <Link 
                    to='#projets' 
                    smooth 
                    className="navbar-link">
                        Projets
                    </Link>
                </li>
                <li className="navbar-item slideInDown5">
                    <Link 
                    to='#contact' 
                    smooth 
                    className="navbar-link"
                    >
                        Contact
                    </Link>
                </li>
            </ul>
            <button onClick={handleShowLinks} className="navbar-burger">
                <span className="burger-bar"></span>
            </button>
    </nav>
  )
}

export default Nav