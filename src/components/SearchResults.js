// SearchResults.js
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SearchResults = ({ products, setSearch }) => {
  const clearSearch = () => setSearch("");
  return (
    <ResultsContainer>
      {products.map((product) => (
        <Link
          to={`/products/${product.id}`}
          key={product.id}
          onClick={clearSearch}
        >
          <ResultItem>
            <img src={product.imageUrl} alt={product.title} />
            <div>
              <h4>{product.title}</h4>
              <p>{product.description}</p>
              <div className="price">
                <p>${product.discountedPrice}</p>
                <p>
                  <s>
                    {product.discountedPrice === product.proce &&
                      `$${product.proce}`}
                  </s>
                </p>
              </div>
            </div>
          </ResultItem>
        </Link>
      ))}
    </ResultsContainer>
  );
};

const ResultsContainer = styled.div`
  position: absolute;
  width: 100%;
  background-color: white;
  border-radius: 0px 0px 5px 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const ResultItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--clr-grey-3);
  .price {
    display: flex;
    gap: 10px;
  }
  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    margin-right: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
    color: var(--clr-grey-3);
  }
  p {
    margin-bottom: 0;
    color: var(--clr-grey-3);
    font-size: 0.875rem;
  }
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background: var(--clr-grey-10);
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    img {
      width: 100%;
      height: 200px;
      margin-bottom: 1rem;
    }
  }
`;

export default SearchResults;
