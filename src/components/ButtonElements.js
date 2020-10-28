import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 5px;
    border-color: #ff7105;
    opacity: 0.9;
    background: ${({primary}) => (primary ? '#ff7105' : ' #010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2 ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #ff7105;
        color: #fff;
        opacity: 1.1;
    }
`;

export const Button2 = styled(Link)`
    background: #ff7105;
    border-radius: 3px;
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2 ease-in-out;

    &:hover{
        transition: all 0.4s ease-in-out;
        background: #ff7105;
        color: #fff;
        opacity: 1.1;
        border-radius: 15px;
    }
`;
