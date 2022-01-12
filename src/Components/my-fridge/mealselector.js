import React, { useState } from "react";
import styled, { keyframes } from 'styled-components';
import Bar from './assets/bar.png';
import {Link} from 'react-router-dom'

const StyledContainer = styled.div`

    @media (max-width: 320px) {
        max-width: 100%;
        overflow-x: hidden;
        font-family: "Helvetica Neue", sans-serif;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        position: absolute;
    }
`;

const StyledWrapper = styled.div`
    @media (max-width: 320px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
        background: #fcfcfc;
    }
`;

const StyledHeaders = styled.div`
    @media (max-width: 320px) {
    margin-top: 120px;
    position: relative;
    text-align: left;
    justify-content: center;
    width: 80%;
    }
`;

const StyledHeader = styled.h1`
@media (max-width: 320px) {
    margin-left: -15px;
    color: #3B3B3B;
    font-weight: 900;
    font-size: 25px;
    font-family: 'Helvetica Neue', sans-serif;
}
`;

const StyledBar = styled.img`
@media (max-width: 320px) {
    top: 0;
    margin-top: 20px;
    position: fixed;
    width: 290px;
    height: auto;
    justify-content: center;
    z-index: 2;
}
`;

const MealSelector = () => {

    return (
        <StyledContainer>
                <StyledWrapper>
                    <StyledBar src= {Bar} className="bar" alt="" />
                <StyledHeaders>
                    <StyledHeader>Here are some meals for you!</StyledHeader>
                </StyledHeaders>
            </StyledWrapper>
        </StyledContainer>
    )

};

export default MealSelector;