import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ title, imageUrl, price, id, discountedPrice }) => {
  return (
    <Wrapper>
      <div className="container">
        <img src={imageUrl} alt={title} />
        <Link to={`/products/${id}`} className="link">
          <FaEye />
        </Link>
      </div>
      <footer>
        <h5>{title}</h5>
        <div className="pricecontainer">
          <p className="discountedprice">{formatPrice(discountedPrice)}</p>
          {discountedPrice === price ? null : (
            <p className="price">
              <s>{formatPrice(price)}</s>
            </p>
          )}
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }
  .pricecontainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .price {
    margin-left: 12px;
    color: #000000;
    font-size: 12px;
  }

  footer p {
    color: var(--clr-primary-5);
    letter-spacing: var(--spacing);
  }
`;
export default Product;
