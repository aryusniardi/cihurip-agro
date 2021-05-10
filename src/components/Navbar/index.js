import React from 'react'
import Logo from '../../images/Logo - Cihurip Agro@4x.png'
import {Nav, NavLink, NavLogo} from './NavbarElements'

const Navbar = () => {
    return (
        <React.Fragment>
            <Nav>
                <NavLink to="/">
                    <NavLogo src={Logo} alt="Logo" />
                    Cihurip Agro
                </NavLink>
            </Nav>
        </React.Fragment>
    )
}

export default Navbar