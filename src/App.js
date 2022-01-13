import React from "react";
import styled from "styled-components";
import MyFridge from "./Components/my-fridge/myfridge";
import Login from "./Components/my-fridge/login";
import Ingredients from "./Components/my-fridge/ingredients";
import MealSelector from "./Components/my-fridge/mealselector";
import MealPage1 from "./Components/my-fridge/mealpage1";
import MealPage2 from "./Components/my-fridge/mealpage2";
import MealPage3 from "./Components/my-fridge/mealpage3";


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
      <Route path="/mealpage1" element={<MealPage1 />} />
      <Route path="/mealpage2" element={<MealPage2 />} />
      <Route path="/mealpage3" element={<MealPage3 />} />
      <Route exact path="/" element={<Home />} />
    </Routes>
  </Router>
);

export default App;
