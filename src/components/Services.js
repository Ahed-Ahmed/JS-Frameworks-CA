import React from "react";
import styled from "styled-components";
import { services } from "../utils/constants";
import { motion } from "framer-motion";

const Services = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <h3>
            Main Heading <br />
            Design only for you
          </h3>
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
        <motion.div
          className="services-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <motion.article key={id} className="service" variants={item}>
                <span className="icon">{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--clr-primary-1);
  }
  padding: 5rem 0;

  background: var(--clr-primary-10);

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-grey-5);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-primary-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-grey-5);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;
export default Services;
