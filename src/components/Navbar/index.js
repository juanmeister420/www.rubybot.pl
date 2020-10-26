import React from 'react';
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = () => {
    return (
     <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>Ruby</NavLogo>
                <MobileIcon>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='about'>O Bocie</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='discover'>Discord</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='services'>Zalety</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='singup'>Zaproś bota</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/panel'>Panel</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
     </>
    )
}

export default Navbar
