import React, { useState } from "react";
import styled, { keyframes } from 'styled-components';
import Bar from './assets/bar.png';
import Chicken from './assets/chicken.png';
import Beef from './assets/beef.png';
import Pork from './assets/pork.png';
import Turkey from './assets/turkey.png';
import Salmon from './assets/salmon.png';
import Tuna from './assets/tuna.png';
import SeaBass from './assets/seabass.png';
import Cod from './assets/cod.png';
import Broccoli from './assets/broccoli.png';
import Tomato from './assets/tomato.png';
import Onion from './assets/onion.png';
import BellPepper from './assets/bellpepper.png';
import Rice from './assets/rice.png';
import Pasta from './assets/pasta.png';
import Noodles from './assets/noodles.png';
import Potato from './assets/potato.png';
import arrow from './assets/arrow.png';
import {Link} from 'react-router-dom'
import { paste } from "@testing-library/user-event/dist/paste";

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

const StyledIngredient = styled.div`
@media (max-width: 320px) {
    overflow: auto;
    white-space: nowrap;
    max-width: 150%;
    position: relative;
    text-align: left;
    justify-content: center;
    z-index: 1;
}
`;

const IngredientContainer = styled.div`

@media (max-width: 320px) {
    width: 100%;
    display: flex;
    align-items: left;
    justify-content: left;
    margin-left: 77px;
}
`;

const StyledHeader = styled.h1`
@media (max-width: 320px) {
    margin-top: 30px;
    margin-left: -15px;
    color: #3B3B3B;
    font-weight: 900;
    font-size: 25px;
    font-family: 'Helvetica Neue', sans-serif;
}
`;

const StyledHeader2 = styled.h2`
@media (max-width: 320px) {
    margin-right: 250px;
    color: #505050;
    font-weight: 450;
    font-size: 20px;
    font-family: 'Helvetica Neue', sans-serif;
}
`;

const StyledHeaderVeg = styled.h2`
@media (max-width: 320px) {
    margin-right: 200px;
    color: #505050;
    font-weight: 450;
    font-size: 20px;
    font-family: 'Helvetica Neue', sans-serif;
}
`;

const StyledItem = styled.div`

@media (max-width: 320px) {
    width: 90px;
    height: 90px;
    border: 2px solid rgba(112, 112, 112, .1);
    border-radius: 20%;
    background-color: #EDEDED;
    display: inline-block;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0px 10px 0px 10px;
}
`;

const ItemIcon = styled.img`
@media (max-width: 320px) {
    width: 34px;
    height: 34px;
    margin-top: 20%;
}
`;

const ItemName = styled.p`
@media (max-width: 320px) {
    color: #494949;
    font-weight: 400;
    font-size: 15px;
    font-family: 'Helvetica Neue', sans-serif;
    margin-top: 10px;
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

const Button = styled.button`
@media (max-width: 320px) { 
    border: none;
    color: white;
    padding: 8px 120px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    border-radius: 6px;
    cursor: pointer;
    background: #89B33B;
    margin-top: 30px;
}
`;

const Arrow = styled.img`
@media (max-width: 320px) {
    width: 26px;
    height: auto;
    padding-top: 2px;
}
`;

const Ingredients = () => {

    return (

            <StyledContainer>
                <StyledWrapper>
                        <StyledBar src= {Bar} className="bar" alt="" />
                    <StyledHeaders>
                        <StyledHeader>What's in my fridge?</StyledHeader>
                    </StyledHeaders>
                    <StyledHeader2>Meat</StyledHeader2>
                    <StyledIngredient className="meat">
                        <IngredientContainer>
                            <StyledItem className="ChickenItem">
                                <ItemIcon  src= {Chicken} className="chicken" alt=""/>
                                <ItemName>Chicken</ItemName>
                            </StyledItem>
                            <StyledItem className="BeefItem">
                                <ItemIcon  src= {Beef} className="beef" alt=""/>
                                <ItemName>Beef</ItemName>
                            </StyledItem>
                            <StyledItem className="PorkItem">
                                <ItemIcon  src= {Pork} className="pork" alt=""/>
                                <ItemName>Pork</ItemName>
                            </StyledItem>
                            <StyledItem className="TurkeyItem">
                                <ItemIcon  src= {Turkey} className="turkey" alt=""/>
                                <ItemName>Turkey</ItemName>
                            </StyledItem>
                        </IngredientContainer>
                    </StyledIngredient>
                    <StyledHeader2>Fish</StyledHeader2>
                    <StyledIngredient className="fish">
                        <IngredientContainer>
                            <StyledItem className="SalmonItem">
                                <ItemIcon  src= {Salmon} className="salmon" alt=""/>
                                <ItemName>Salmon</ItemName>
                            </StyledItem>
                            <StyledItem className="TunaItem">
                                <ItemIcon  src= {Tuna} className="tuna" alt=""/>
                                <ItemName>Tuna</ItemName>
                            </StyledItem>
                            <StyledItem className="SeaBassItem">
                                <ItemIcon  src= {SeaBass} className="seabass" alt=""/>
                                <ItemName>Sea Bass</ItemName>
                            </StyledItem>
                            <StyledItem className="CodItem">
                                <ItemIcon  src= {Cod} className="cod" alt=""/>
                                <ItemName>Cod</ItemName>
                            </StyledItem>
                        </IngredientContainer>
                    </StyledIngredient>
                    <StyledHeaderVeg>Vegetables</StyledHeaderVeg>
                    <StyledIngredient className="vegetables">
                        <IngredientContainer>
                            <StyledItem className="BroccoliItem">
                                <ItemIcon  src= {Broccoli} className="broccoli" alt=""/>
                                <ItemName>Broccoli</ItemName>
                            </StyledItem>
                            <StyledItem className="TomatoItem">
                                <ItemIcon  src= {Tomato} className="tomato" alt=""/>
                                <ItemName>Tomato</ItemName>
                            </StyledItem>
                            <StyledItem className="OnionItem">
                                <ItemIcon  src= {Onion} className="onion" alt=""/>
                                <ItemName>Onion</ItemName>
                            </StyledItem>
                            <StyledItem className="BellPepperItem">
                                <ItemIcon  src= {BellPepper} className="bellpepper" alt=""/>
                                <ItemName>Bell Pepper</ItemName>
                            </StyledItem>
                        </IngredientContainer>
                    </StyledIngredient>
                    <StyledHeader2>Sides</StyledHeader2>
                    <StyledIngredient className="sides">
                        <IngredientContainer>
                            <StyledItem className="RiceItem">
                                <ItemIcon  src= {Rice} className="rice" alt=""/>
                                <ItemName>Rice</ItemName>
                            </StyledItem>
                            <StyledItem className="PastaItem">
                                <ItemIcon  src= {Pasta} className="pasta" alt=""/>
                                <ItemName>Pasta</ItemName>
                            </StyledItem>
                            <StyledItem className="NoodlesItem">
                                <ItemIcon  src= {Noodles} className="noodles" alt=""/>
                                <ItemName>Noodles</ItemName>
                            </StyledItem>
                            <StyledItem className="PotatoItem">
                                <ItemIcon  src= {Potato} className="potato" alt=""/>
                                <ItemName>Potato</ItemName>
                            </StyledItem>
                        </IngredientContainer>
                    </StyledIngredient>
                    <Link to="/mealselector"> 
                        <Button>
                            <Arrow src= {arrow} className="arrow" alt="" />
                        </Button>
                    </Link>
                </StyledWrapper>
            </StyledContainer>

    )
};

export default Ingredients;