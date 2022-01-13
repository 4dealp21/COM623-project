import React, { useState } from "react";
import styled, { keyframes } from 'styled-components';
import BackArrow from './assets/back_arrow_white.png';
import Bar from './assets/barwhite.png';
import MealPic from './assets/mealpicture1.png';
import {Link} from 'react-router-dom';

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
const StyledBackArrow = styled.img`
@media (max-width: 320px) {
    width: 26px;
    height: auto;
    position: absolute;
    margin-top: 120px;
    top: 0;
    margin-left: -130px;
    margin-top: 70px;
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

const ImageContainer = styled.div`
@media (max-width: 320px) {
    width: 100%;
    height: 25%;
    position absolute;
    top: 0;
}
`;

const MealPicture = styled.img`
@media (max-width: 320px) {
}
`;


const Meal1 = () => {

    return (
        <StyledContainer>
            <StyledWrapper>
                <ImageContainer>
                    <MealPicture src= {MealPic} className="mealpic" alt=""/>
                </ImageContainer>
                <StyledBar src= {Bar} className="bar" alt="" />
                    <Link to="/mealselector">
                        <StyledBackArrow src= {BackArrow} className="back_arrow" alt="" />
                    </Link>
            </StyledWrapper>
        </StyledContainer>
    )

};

export default Meal1;