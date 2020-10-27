import styled from 'styled-components';

export const FooterContainer = styled.div`
    background: #000;
    text-decoration: none;
`;

export const FooterWrap = styled.div`
    padding: 12px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    max-width: 1100px;
    margin: 0 auto;
`;

export const Autor = styled.div`
    display: flex;
    justify-content: center;
    color: #fff;
    text-decoration: none;
    font-size: 12px;


    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;

export const Link = styled.a`
    text-decoration: none;
    color: #fff;
`
