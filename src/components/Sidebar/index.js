import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen, toogle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toogle}>
            <Icon onClick={toogle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' onClick={toogle}>Twórcy</SidebarLink>
                    <SidebarLink to='discover' onClick={toogle}>O Bocie</SidebarLink>
                    <SidebarLink to='services' onClick={toogle}>Bezpieczeństwo</SidebarLink>
                    <SidebarLink to='stats' onClick={toogle}>Statystyki</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute onClick={()=> window.open("https://redirect.rubybot.pl/zaproszenie/")}>Zaproś Bota</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
