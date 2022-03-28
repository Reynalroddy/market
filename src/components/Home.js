import React from "react";
import Side from "./Side";
import styled from "styled-components";
import Navbar from "./Navbar";
import Main from "./Main";
const Home = () => {
  return (
    <Wrapper>
      <Side />
      <div className="rest">
        <Navbar />
        <Main />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  width: 100%;

  .rest {
    width: calc(100% - 6.2rem);
    padding: 1.3rem;
    padding-top: 1.7rem;
  }
  @media screen and (max-width: 768px) {
    .rest {
      width: calc(100% - 4.2rem);
    }
  }
`;

export default Home;
