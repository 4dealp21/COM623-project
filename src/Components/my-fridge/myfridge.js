import React, { useState } from "react";
import styled, { keyframes } from 'styled-components';
import Bar from './assets/bar.png';
import apple from './assets/apple.png';
import carrot from './assets/carrot.png';
import arrow from './assets/arrow.png';
import {Link} from 'react-router-dom'

const AppleAnimation = keyframes`

    0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(-35deg);
    }
    100% {
        transform: rotate(0deg);
    }

`;

const CarrotAnimation = keyframes`

    0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(35deg);
    }
    100% {
        transform: rotate(0deg);
    }

`;


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

const StyledHeaders = styled.div`
@media (max-width: 320px) {
    position: relative;
    text-align: left;
    justify-content: center;
    width: 70%;
}
`;

const StyledHeader = styled.h1`
@media (max-width: 320px) {
    color: #696969;
    font-weight: 900;
    font-size: 34px;
    font-family: 'Helvetica Neue', sans-serif;
    margin-bottom: -10px;
}
`;

const StyledHeader2 = styled.h2`
@media (max-width: 320px) {
    color: #696969;
    font-weight: 900;
    font-size: 24px;
    font-family: 'Helvetica Neue', sans-serif;
}
`;

const StyledBold = styled.span`
@media (max-width: 320px) {
    color: #89B33B;
    font-weight: 900;
    font-size: 34px;
    font-family: 'Helvetica Neue', sans-serif;
}
`;


const Fruit = styled.div`
@media (max-width: 320px) {
    position: relative;
    justify-content: space-between;
    display: flex;
    z-index: 1;
    padding: 10px 0px 40px 0px;
    margin-top: -90px;
}
`;

const Apple = styled.img`
@media (max-width: 320px) {
    margin-left: 60px; 
    position: relative;
    width: 82px;
    height: auto;
    animation: 2s ${AppleAnimation} ease-in-out infinite;
}
`;

const Carrot = styled.img`
@media (max-width: 320px) {
    margin-right: 60px; 
    position: relative;
    width: 82px;
    height: auto;
    animation: 2s ${CarrotAnimation} ease-in-out infinite;
}
`;

const Button = styled.button`
@media (max-width: 320px) {
    border: none;
    color: white;
    padding: 8px 100px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    border-radius: 6px;
    cursor: pointer;
    background: #89B33B;
    margin-top: 20px;
}
`;

const Arrow = styled.img`
@media (max-width: 320px) {
    width: 26px;
    height: auto;
    padding-top: 2px;
}
`;

const MyFridge = () => {

    return (

            <StyledContainer>
                <StyledWrapper>
                    <StyledBar src= {Bar} className="bar" alt="" />
                    <Fruit>
                        <Apple src= {apple} className="apple" alt="" />
                        <Carrot src= {carrot} className="apple" alt="" />
                    </Fruit>
                    <StyledHeaders>
                        <StyledHeader>Hi <StyledBold>there!</StyledBold></StyledHeader>
                        <StyledHeader2>What's in your fridge today?</StyledHeader2>
                    </StyledHeaders>
                    <Link to="/ingredients">
                        <Button>
                            <Arrow src= {arrow} className="arrow" alt="" />
                        </Button>
                    </Link>
                </StyledWrapper>
            </StyledContainer>

    )

};


export default MyFridge;
