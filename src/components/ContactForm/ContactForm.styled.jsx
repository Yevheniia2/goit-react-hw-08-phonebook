import styled from 'styled-components';

export const FormBox = styled.form`
    display: block;
    background-color: rgba(255,255,255,0.2);
    padding: 0.5em;
    border-radius: 20px;
    border-left: 1px solid $white;
    border-top: 1px solid $white;
    backdrop-filter: blur(10px);
    box-shadow: 20px 20px 40px -6px rgba(0,0,0,0.5);
    text-align: center;
    position: relative;
    transition: all 0.2s ease-in-out;
    margin-top: 16px;
    box-shadow: inset rgba(0, 0, 0, 0.541) -3px -3px 8px,
    inset rgba(255, 253, 253, 0.9) 3px 3px 8px,
    rgba(0, 0, 0, 0.8) 3px 3px 8px -3px;
`;

export const FormLabel = styled.label`
    display: block;
    justify-content: center;
    flex-direction: column;
`;

export const FormParagraph = styled.p`
    font-weight: 500;
    color: #fff;
    font-size: 15px;
    margin-right: 20px;
    margin-bottom: 10px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
`;

export const FormInput = styled.input`
    background-color: transparent;
    width: 200px;
    padding: 1em;
    margin-bottom: 10px;
    border: none;
    border-left: 1px solid $white;
    border-top: 1px solid $white;
    border-radius: 5000px;
    backdrop-filter: blur(5px);
    box-shadow: 4px 4px 60px rgba(0,0,0,0.2);
    color: #fff;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    transition: all 0.2s ease-in-out;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    box-shadow: inset rgba(0, 0, 0, 0.541) -3px -3px 8px,
    inset rgba(255, 253, 253, 0.9) 3px 3px 8px,
    rgba(0, 0, 0, 0.8) 3px 3px 8px -3px;
    
    &:hover {
        background-color: rgba(255,255,255,0.1);
        box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.2);
    }

    &:focus {
        background-color: rgba(255,255,255,0.1);
        box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.2);
    }
`;

export const FormButton = styled.button`
    background-color: transparent;
    padding: 10px;
    margin-top: 15px;
    margin-bottom: 15px;
    border: none;
    border-left: 1px solid $white;
    border-top: 1px solid $white;
    border-radius: 5000px;
    backdrop-filter: blur(5px);
    box-shadow: 4px 4px 60px rgba(0,0,0,0.2);
    color: #fff;
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    transition: all 0.2s ease-in-out;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    width: 100px;
    height: 35px;
    font-size: 14px;
    box-shadow: inset rgba(0, 0, 0, 0.541) -3px -3px 8px,
    inset rgba(255, 253, 253, 0.9) 3px 3px 8px,
    rgba(0, 0, 0, 0.8) 3px 3px 8px -3px;
        
    &:hover {
        background-color: rgba(255,255,255,0.1);
        box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.2);
        cursor: pointer;
    }

    &:focus {
        background-color: rgba(255,255,255,0.1);
        box-shadow: 4px 4px 60px 8px rgba(0,0,0,0.2);
    }
        
    &:active {
        background-color: rgba(255,255,255,0.2);
    }
`;