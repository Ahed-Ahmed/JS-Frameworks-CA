import React, { useState } from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
const ListView = ({ products }) => {
  const [equal, setEqual] = useState(false);
  return (
    <Wrapper>
      {React.Children.toArray(
        products.map((product) => {
          const { id, imageUrl, title, price, description, discountedPrice } =
            product;

          return (
            <article>
              <img src={imageUrl} alt={title} />
              <div>
                <h4>{title}</h4>
                <div className="price-container">
                  <h5 className="discounted-price">
                    {formatPrice(discountedPrice)}
                  </h5>
                  <h5 className="price">
                    {discountedPrice === price ? null : (
                      <s>{formatPrice(price)}</s>
                    )}
                  </h5>
                </div>
                <p>{description.substr(0, 150)}...</p>
                <Link to={`/products/${id}`} className="btn">
                  Details
                </Link>
              </div>
            </article>
          );
        })
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price-container {
    display: flex;
    align-items: center;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
    margin-left: 12px;
    font-size: 12px;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ListView;
