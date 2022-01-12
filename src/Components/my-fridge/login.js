import React, { useState } from "react";
import styled, { keyframes } from 'styled-components';
import Bar from './assets/bar.png';
import apple from './assets/apple.png';
import carrot from './assets/carrot.png';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {Link} from 'react-router-dom'

const schema = yup.object().shape({
    email: yup.string().required('Email is required').email('Not a valid email'),
    password: yup.string().required('Password is required'),
  });


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

const StyledInput = styled.input`
    background: #FCFCFC;
    border: 2px solid #B6C867;
    border-radius: 15px;
    width: 224px;
    height: 32px;
    padding-left: 10px;
    font-size: 10px;
`;

const StyledButton = styled.button`
    border: none;
    color: white;
    padding: 8px 100px;
    text-align: center;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    margin: 4px 2px;
    border-radius: 6px;
    cursor: pointer;
    background: #89B33B;
    margin-top: 20px;
    &:hover {
        background: #7FA737;
    }
    &:active {
        background: #4A3FFF;
    }
`;


const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const [submitted, setSubmitted] = useState(false);

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
      });

    const onSubmit = data => console.log(data);

    const handleClick = (e) => {
        setShowPassword(!showPassword);
    };

    return (

        <OuterWrapper>
            <StyledContainer>
                <StyledWrapper>
                    <StyledBar src= {Bar} className="bar" alt="" />
                    <Fruit>
                        <Apple src= {apple} className="apple" alt="" />
                        <Carrot src= {carrot} className="apple" alt="" />
                    </Fruit>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <p>
                            <StyledInput type="text" name="email" placeholder="Email" ref={register()} />
                        </p>

                        <p>
                            <StyledInput type={showPassword ? "text" : "password"} name="password" placeholder="Password" ref={register()} />
                        </p>
                        <p>
                        <Link to="/myfridge">                            
                            <StyledButton> Log in </StyledButton>
                        </Link>

                        </p>
                </form>
                </StyledWrapper>
            </StyledContainer>
        </OuterWrapper>

    )

};

export default Login;