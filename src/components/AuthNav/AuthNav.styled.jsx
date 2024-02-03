import styled from 'styled-components';

export const AuthLink = styled.link`
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