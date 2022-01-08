import React from "react";
import styled from "styled-components";
import MyFridge from "./Components/my-fridge/myfridge";

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
        <Link to="/myfridge">here </Link>
  </nav>
  </StyledWrapper>
);

const App = () => (
  <Router> 
    <Routes>
      <Route path="/myfridge" element={<MyFridge />} />
      <Route exact path="/" element={<Home />} />
    </Routes>
  </Router>
);

export default App;
