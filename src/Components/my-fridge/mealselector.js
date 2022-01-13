import React, { useState } from "react";
import styled, { keyframes } from 'styled-components';
import Bar from './assets/bar.png';
import BackArrow from './assets/back_arrow.png';
import Meal1 from './assets/meal1.png';
import Meal2 from './assets/meal2.png';
import Meal3 from './assets/meal3.png';
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

const StyledHeaders = styled.div`
    @media (max-width: 320px) {
    margin-top: 30px;
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
    margin-top: -60px;
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

const StyledDiv = styled.div`
@media (max-width: 320px) {
    width: 100%;
    height: 30%;
    position: relative;
    margin-top: 160px;
    margin-left: 35px;
}
`;

const StyledBackArrow = styled.img`
@media (max-width: 320px) {
    width: 26px;
    height: auto;
    position: relative;
    margin-top: 120px;
}
`;


const StyledMealContainer = styled.div`
@media (max-width: 320px) {
    width: 90%;
    height: 220px;
    position: relative;
    margin-top: 20px;
    border-radius: 15px 15px 0 0;
    padding-bottom: 20px;
}
`;

const StyledMealPic = styled.img`
    width: 100%;
`;

const MealNameContainer = styled.div`
    width: 100%;
    height: 30px;
    margin-top: -3px;
    position: relative;
    background-color: #89B33B;
    font-weight: 900;
    color: white;
    font-size: 15px;
    font-family: 'Helvetica Neue', sans-serif;
    text-align: center;
    justify-content: center;
    padding: 5px 0 0 0;
`;

const Details = styled.div`
    width: 100%;
    height: 20%;
    position: relative;
    display: inline-block
    justify-content: center;
    text-align: center;
    font-wight: 700;
    color: #707070;
    padding: 10px 0 10px 0;
    background-color: #F0F0F0;
    border-radius: 0 0 15px 15px;
`;

const LeftDetails = styled.div`
    width: 25%;
    position: relative;
    float: left;
    margin-left: 25px;
`;

const RightDetails = styled.div`
    width: 25%;
    position: relative;
    float: right;
    margin-right: 25px;
`;

const Bold = styled.span`
    color: #585858;
    font-weight: 800;
`;

const MealSelector = () => {

    return (
        <StyledContainer>
            <StyledWrapper>
                <StyledBar src= {Bar} className="bar" alt="" />
                <StyledDiv>
                    <Link to="/ingredients">
                        <StyledBackArrow src= {BackArrow} className="back_arrow" alt="" />
                    </Link>
                </StyledDiv>
            <StyledHeaders>
                <StyledHeader>Here are some meals for you!</StyledHeader>
            </StyledHeaders>

                <StyledMealContainer>
                    <Link to="/mealpage1">
                    <StyledMealPic src= {Meal1} className="mealpic1" alt="" />
                    </Link>
                    <MealNameContainer>Chicken Tomato Soup</MealNameContainer>
                    <Details>
                        <LeftDetails><Bold>Difficulty</Bold> 3/5</LeftDetails>
                        <RightDetails><Bold>Duration</Bold> 20min</RightDetails>
                    </Details>
                </StyledMealContainer>
                <StyledMealContainer>
                <Link to="/mealpage2">
                        <StyledMealPic src= {Meal2} className="mealpic2" alt="" />
                </Link>
                    <MealNameContainer>Fried Chicken Fillets</MealNameContainer>
                    <Details>
                        <LeftDetails><Bold>Difficulty</Bold> 2/5</LeftDetails>
                        <RightDetails><Bold>Duration</Bold> 25min</RightDetails>
                    </Details>
                </StyledMealContainer>
                <StyledMealContainer>
                <Link to="/mealpage3">
                        <StyledMealPic src= {Meal3} className="mealpic3" alt="" />
                </Link>
                    <MealNameContainer>Thai Red Curry Chicken</MealNameContainer>
                    <Details>
                        <LeftDetails><Bold>Difficulty</Bold> 4/5</LeftDetails>
                        <RightDetails><Bold>Duration</Bold> 40min</RightDetails>
                    </Details>
                </StyledMealContainer>
            </StyledWrapper>
        </StyledContainer>
    )

};

export default MealSelector;