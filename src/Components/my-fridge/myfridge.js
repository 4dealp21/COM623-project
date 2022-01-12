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

const OuterWrapper = styled.div`
    font-family: "Helvetica Neue", sans-serif;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    background: #ffb057;
`;

const StyledContainer = styled.div`
    position: absolute;
    width:308px;
    height: 615px;
`;

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: auto;
    margin: auto;
    z-index: 1;
    background: #fcfcfc;
    box-shadow: 0px 0px 20px rgb(0, 0, 0, 0.05);
`;

const StyledHeaders = styled.div`
    position: relative;
    text-align: left;
    justify-content: center;
    width: 70%;
`;

const StyledHeader = styled.h1`
    color: #696969;
    font-weight: 900;
    font-size: 34px;
    font-family: 'Helvetica Neue', sans-serif;
    margin-bottom: -10px;
`;

const StyledHeader2 = styled.h2`
    color: #696969;
    font-weight: 900;
    font-size: 24px;
    font-family: 'Helvetica Neue', sans-serif;
`;

const StyledBold = styled.span`
    color: #89B33B;
    font-weight: 900;
    font-size: 34px;
    font-family: 'Helvetica Neue', sans-serif;
`;

const StyledBar = styled.img`
    position: absolute;
    top: 0;
    padding-top: 15px;
    width: 290px;
    height: auto;
    justify-content: center;
`;

const Fruit = styled.div`
    position: relative;
    justify-content: space-between;
    display: flex;
    z-index: 1;
    padding: 10px 0px 40px 0px;
    margin-top: -90px;
`;

const Apple = styled.img`
    margin-left: 60px; 
    position: relative;
    width: 82px;
    height: auto;
    animation: 2s ${AppleAnimation} ease-in-out infinite;
`;

const Carrot = styled.img`
    margin-right: 60px; 
    position: relative;
    width: 82px;
    height: auto;
    animation: 2s ${CarrotAnimation} ease-in-out infinite;
`;

const Button = styled.button`
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
`;

const Arrow = styled.img`
    width: 26px;
    height: auto;
    padding-top: 2px;
`;

const MyFridge = () => {

    return (

        <OuterWrapper>
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
        </OuterWrapper>

    )

};


export default MyFridge;
