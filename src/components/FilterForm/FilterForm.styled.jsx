import styled from 'styled-components';

export const FilterBox = styled.div`
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
    box-shadow: inset rgba(0, 0, 0, 0.541) -3px -3px 8px,
    inset rgba(255, 253, 253, 0.9) 3px 3px 8px,
    rgba(0, 0, 0, 0.8) 3px 3px 8px -3px;
`;