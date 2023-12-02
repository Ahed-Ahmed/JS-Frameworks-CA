import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";
import { useProductsContext } from "../context/products_context";

const AboutPage = () => {
  const { clearSearch } = useProductsContext();

  return (
    <main onClick={clearSearch}>
      <PageHero title="About" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="About Page" />
        <article>
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            gravida accumsan sem, vel sagittis dui efficitur vitae. Quisque vel
            magna elementum, semper urna quis, tincidunt velit. Ut sit amet nisl
            ante. Curabitur dui odio, gravida vitae purus quis, iaculis faucibus
            libero. Pellentesque ac consectetur risus. Maecenas lorem risus,
            sodales sit amet mattis a, dapibus ac neque. In ullamcorper ornare
            massa non volutpat. Fusce vel interdum nulla. Maecenas accumsan
            vestibulum augue, nec consequat augue ultricies a. Quisque porta
            magna ut dolor porttitor tristique.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
