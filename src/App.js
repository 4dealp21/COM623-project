import React from "react";
import styled from "styled-components";
import MyFridge from "./Components/my-fridge/myfridge";
import Login from "./Components/my-fridge/login";
import Ingredients from "./Components/my-fridge/ingredients";
import MealSelector from "./Components/my-fridge/mealselector";


import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const StyledWrapper = styled.div`
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Home = () => (

  <StyledWrapper>
  <nav>
    <h1>Contemporary web-apps</h1>
        <Link to="/login">here </Link>
  </nav>
  </StyledWrapper>
);

const App = () => (
  <Router> 
    <Routes>
      <Route path="/myfridge" element={<MyFridge />} />
      <Route path="/login" element={<Login />} />
      <Route path="/ingredients" element={<Ingredients />} />
      <Route path="/mealselector" element={<MealSelector />} />
      <Route exact path="/" element={<Home />} />
    </Routes>
  </Router>
);

export default App;
