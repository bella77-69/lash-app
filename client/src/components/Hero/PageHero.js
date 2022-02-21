import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/">Home </Link>
          {product && <Link to="/products">/ Products</Link>}/ {title}
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: hsl(22, 31%, 88%);
  width: 100%;
  min-height: 15vh;
  display: flex;
  align-items: center;
  color: hsl(22, 28%, 21%);
  a {
    color: hsl(22, 28%, 37%);
    padding: 0.5rem;
    transition: all 0.3s linear;
  }
  a:hover {
    color: hsl(22, 28%, 21%);
  }
`;

export default PageHero;
