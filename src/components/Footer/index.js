import React from 'react';
import { FooterContainer, FooterWrap, Autor, Link } from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <Autor>@<Link href="https://hunchos.store/"> hunchos.software</Link>🌐</Autor>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
