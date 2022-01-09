import React, { useState } from "react";
import styled from "styled-components";
import iphone from './assets/iphone-12.png';


const StyledWrapper = styled.div`
    font-family: "Helvetica Neue", sans-serif;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    z-index: 1;
`;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 20px rgb(0, 0, 0, 0.05);
`;

const StyledIphone = styled.img`
    width: 25vw;
    height: auto;
    filter: drop-shadow(20px 24px 32px rgba(0, 0, 0, 0.251783));
    top: 0;
    right: 0;
    z-index: 5;
`;

const MyFridge = () => {

    return (

        <StyledWrapper>
            <StyledContainer>
                <StyledIphone src={iphone} className="iphone" alt=""></StyledIphone>
            </StyledContainer>
        </StyledWrapper>

    )

};


export default MyFridge;