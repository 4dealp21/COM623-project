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
}
`;

const Carrot = styled.img`
@media (max-width: 320px) {
    margin-right: 60px; 
    position: relative;
    width: 82px;
    height: auto;
}
`;

const StyledInput = styled.input`
@media (max-width: 320px) {
    background: #FCFCFC;
    border: 2px solid #B6C867;
    border-radius: 15px;
    width: 224px;
    height: 32px;
    padding-left: 10px;
    font-size: 10px;
}
`;

const StyledButton = styled.button`
@media (max-width: 320px) {
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

    )

};

export default Login;