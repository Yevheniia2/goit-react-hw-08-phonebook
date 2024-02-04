import styled from 'styled-components';
import {NavLink} from "react-router-dom";

export const AuthLinkBox = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: space-around;
    padding: 5px 15px;
    text-align: start;
    background-color:  rgba(255,255,255,0.2);
    border-radius: 4px;
    box-shadow: inset rgba(0, 0, 0, 0.541) -3px -3px 8px,
    inset rgba(255, 253, 253, 0.9) 3px 3px 8px,
    rgba(0, 0, 0, 0.8) 3px 3px 8px -3px;
`;

export const AuthLink = styled(NavLink)`
    display: inline-block;
    padding: 20px 5px;
    font-size: 0.875rem;
    font-weight: 500;
    border-radius: 4px;
    color: #fff;
    text-transform: uppercase;

    &:not(:last-child) {
        margin-right: 10px;
    }

    &:active {
        color: #ffff00;
      }
`;