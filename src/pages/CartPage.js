import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";
import { useProductsContext } from "../context/products_context";
const CartPage = () => {
  const { clearSearch } = useProductsContext();
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <Wrapper className="page-100" onClick={clearSearch}>
        <div className="empty">
          <h2>Your Cart Is Empty</h2>
          <Link to="/products" className="btn">
            Fill It
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <main>
      <PageHero title="cart" />
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default CartPage;
