import React, { useState } from "react";
import styled, { keyframes } from 'styled-components';
import Bar from './assets/bar.png';
import apple from './assets/apple.png';
import carrot from './assets/carrot.png';


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
`;

const Carrot = styled.img`
    margin-right: 60px; 
    position: relative;
    width: 82px;
    height: auto;
`;

const Login = () => {

    return (

        <OuterWrapper>
            <StyledContainer>
                <StyledWrapper>
                    <StyledBar src= {Bar} className="bar" alt="" />
                    <Fruit>
                        <Apple src= {apple} className="apple" alt="" />
                        <Carrot src= {carrot} className="apple" alt="" />
                    </Fruit>
                </StyledWrapper>
            </StyledContainer>
        </OuterWrapper>

    )

};

export default Login;