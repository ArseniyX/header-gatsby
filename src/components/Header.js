import { Link } from 'gatsby'
import React from 'react'

const Header = () => {
    return (
        <nav className='header__navigation'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about/'>About</Link>
                </li>
                <li>
                    <Link to='/map/'>Map</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header
