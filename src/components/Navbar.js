import React, {useState, useEffect} from 'react'
import '../sass/Navbar.scss'

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [largeur, setLargeur] = useState(window.innerWidth)

    const toggleNavSmallScreen = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {

        const changeWidth = () => {
            setLargeur(window.innerWidth);

            if(window.innerWidth > 575){
                setToggleMenu(false);
            }
        }

        window.addEventListener('resize', changeWidth);

        return() => {

            window.removeEventListener('resize', changeWidth);
        }

    }, [])

  return (
            <div className="nav-wrapper ">
                <nav className='container '>
                    <div className="logo">JL</div>
                    {(toggleMenu || largeur > 575) && (
                        <ul className='liste App-navigation'>
                            <li className='items'
                            >Mes projets</li>
                            <li className="items">A propos</li>
                            <li className="items">Contact</li>
                        </ul>
                    )}
                    <button onClick={toggleNavSmallScreen} className='btn'><i class="fa-solid fa-bars"></i></button>
                </nav>
            </div>
  )
}


export default Navbar