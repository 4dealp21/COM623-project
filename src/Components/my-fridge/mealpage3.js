import React, { useState } from "react";
import styled, { keyframes } from 'styled-components';
import BackArrow from './assets/back_arrow_white.png';
import Bar from './assets/barwhite.png';
import MealPic from './assets/mealpicture3.png';
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
    width: 320px;
    position: absolute;
    top: 0;
}
`;

const MealPicture = styled.img`
@media (max-width: 320px) {
}
`;

const StyledHeaders = styled.div`
    @media (max-width: 320px) {
    margin-top: 30px;
    position: relative;
    text-align: left;
    justify-content: center;
    width: 85%;
    }
`;

const StyledHeader = styled.h1`
@media (max-width: 320px) {
    margin-top: -80px;
    color: #3B3B3B;
    font-weight: 900;
    font-size: 28px;
    font-family: 'Helvetica Neue', sans-serif;
    position: relative;
}
`;

const StyledHeader2 = styled.h2`
@media (max-width: 320px) {
    color: #5C5C5C;
    font-weight: 700;
    font-size: 24px;
    font-family: 'Helvetica Neue', sans-serif;
}
`;

const StyledHeader3 = styled.h3`
@media (max-width: 320px) {
    color: #89B33B;
    font-weight: 400;
    font-size: 20px;
    font-family: 'Helvetica Neue', sans-serif;
}
`;

const List = styled.ul`
    position: relative;
    margin-right: 100px;
`;

const BulletPoint = styled.li`
    color: #89B33B;
    padding: 5px 0 5px 0;
`;


const Meal3 = () => {

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
                <StyledHeaders style={{marginTop: '670px'}}>
                    <StyledHeader>Thai Red Curry Chicken</StyledHeader>
                    <StyledHeader2>Ingredients</StyledHeader2>
                </StyledHeaders>
                <List>
                    <BulletPoint><b style={{color: 'black', fontWeight: '400'}}>1x Chicken Breast</b></BulletPoint>
                    <BulletPoint><b style={{color: 'black', fontWeight: '400'}}>200g Noodles</b></BulletPoint>
                    <BulletPoint><b style={{color: 'black', fontWeight: '400'}}>2x Tomatoes</b></BulletPoint>
                    <BulletPoint><b style={{color: 'black', fontWeight: '400'}}>Garden Peas</b></BulletPoint>
                    <BulletPoint><b style={{color: 'black', fontWeight: '400'}}>Mushrooms</b></BulletPoint>
                </List>
                <StyledHeaders>
                    <StyledHeader2 style={{position: 'relative', marginTop: '-20px'}}>Method</StyledHeader2>
                    <StyledHeader3 style={{position: 'relative'}}>Step 1</StyledHeader3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et</p>
                    <StyledHeader3 style={{position: 'relative'}}>Step </StyledHeader3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et</p>
                </StyledHeaders>
            </StyledWrapper>
        </StyledContainer>
    )

};

export default Meal3;