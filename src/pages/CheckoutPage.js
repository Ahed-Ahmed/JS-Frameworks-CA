import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";

const CheckoutPage = () => {
  const { clearSearch } = useProductsContext();
  return (
    <main onClick={clearSearch}>
      <PageHero title="Checkout" />
      <Wrapper className="page-100">
        <section>
          <h3>Your Order Placed Successfully</h3>
          <Link to="/" className="btn">
            Back To Home
          </Link>
        </section>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;
export default CheckoutPage;
