import styled from 'styled-components';

export const NavigLink = styled.link`
    display: inline-block;
    padding: 20px 5px;
    font-size: 0.875rem;
    font-weight: 500;
    color: #fff;
    text-transform: uppercase;

    &:not(:last-child) {
        margin-right: 20px;
    }

    &:active {
        color: #ffff00;
        composes: link;
      }
`;