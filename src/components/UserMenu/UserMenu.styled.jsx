import styled from 'styled-components';

export const UserBox = styled.div`
    background-color: rgba(255,255,255,0.2);
    margin-top: 16px;
    padding: 0.5em;
    border-radius: 20px;
    border-left: 1px solid $white;
    border-top: 1px solid $white;
    backdrop-filter: blur(10px);
    box-shadow: 20px 20px 40px -6px rgba(0,0,0,0.5);
    text-align: center;
    position: relative;
    transition: all 0.2s ease-in-out;
`;

export const UserImage = styled.img`
    background-color: hsl(209, 77%, 68%);
    margin-bottom: 13px;
`;

export const UserSpan = styled.span`
    margin-right: 20px;
    font-size: 0.75rem;
    font-weight: 500;
    color: #fff;
    text-transform: uppercase;
`;