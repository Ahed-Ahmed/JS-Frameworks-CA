import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ReviewSlider from "../components/ReviewSlider";

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    fetchSingleProducts,
    single_products: product,
    single_products_error: error,
    single_products_loading: loading,
    clearSearch,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProducts(`${url}/${id}`);
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [error]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  const {
    title,
    price,
    description,
    id: sku,
    imageUrl,
    rating,
    discountedPrice,
    // brand,
    reviews,
    tags,
  } = product;

  return (
    <Wrapper onClick={clearSearch}>
      <PageHero title={title} product />
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          <ProductImages images={imageUrl} />
          <section className="content">
            <h2>{title}</h2>
            <Stars stars={rating} reviews={rating} total={reviews} />
            <div className="price-container">
              <h2 className="discountprice">{formatPrice(discountedPrice)}</h2>
              {/* <h4 className="price">
                <s>{formatPrice(price)}</s>
              </h4> */}
              {discountedPrice === price ? null : (
                <p className="price">
                  <s>{formatPrice(price)}</s>
                </p>
              )}
            </div>
            <p className="desc">{description}</p>

            <p className="info">
              <span>Sku:</span>
              {sku}
            </p>
            <p className="info">
              <span>Category:</span>
              {tags && tags[0]}
            </p>
            <hr />
            {<AddToCart {...product} />}
          </section>
          <ReviewSlider reviews={product?.reviews} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price-container {
    display: flex;
    align-items: center;
  }
  .discountprice {
    margin-right: 12px;
  }
  .price {
    color: var(--clr-primary-5);
    margin-right: 1rem;
    font-size: 20px;
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    min-width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
