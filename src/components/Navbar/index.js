import React from 'react';
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = ({ toogle }) => {
    return (
     <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>Ruby™</NavLogo>
                <MobileIcon onClick={toogle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>Twórcy</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='discover'>O Bocie</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='services'>Bezpieczeństwo</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='stats'>Statystyki</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink onClick={()=> window.open("https://redirect.rubybot.pl/zaproszenie/")}>Zaproś bota</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
     </>
    )
}

export default Navbar
