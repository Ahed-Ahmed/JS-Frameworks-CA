import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
const ErrorPage = () => {
  const { clearSearch } = useProductsContext();
  return (
    <Wrapper className="page-100" onClick={clearSearch}>
      <section>
        <h1>404</h1>
        <h3>Sorry! The Page You Entered Not Found</h3>
        <Link to="./" className="btn">
          Back To Home
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

export default ErrorPage;
