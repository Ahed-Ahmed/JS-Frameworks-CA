import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import { useValidation } from "../customhooks/useValidation";
import { useProductsContext } from "../context/products_context";
const ContactPage = () => {
  const { clearSearch } = useProductsContext();
  const { handleChange, handleSubmit, formData, errors } = useValidation();
  return (
    <main onClick={clearSearch}>
      <PageHero title="Contact" />
      <Wrapper>
        <div
          className="page section section-center"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h3>If any query please contact Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              gravida accumsan sem, vel sagittis dui efficitur vitae.
            </p>
          </div>
          <div className="content">
            {errors.allFieldsRequired && (
              <p className="error">{errors.allFieldsRequired}</p>
            )}
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                className="form-input"
                name="fullname"
                value={formData?.fullname}
                onChange={handleChange}
              />
              {errors.fullname && (
                <span className="error">{errors.fullname}</span>
              )}
              <input
                type="text"
                placeholder="Subject"
                className="form-input"
                name="subject"
                value={formData?.subject}
                onChange={handleChange}
              />
              {errors.subject && (
                <span className="error">{errors.subject}</span>
              )}
              <input
                type="email"
                placeholder="Enter Email"
                className="form-input"
                name="email"
                value={formData?.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
              <textarea
                type="text"
                placeholder="Body"
                className="form-textarea"
                name="body"
                value={formData?.body}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.body}</span>}
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  h3 {
    text-transform: none;
    text-transform: capitalize;
  }
  p {
    line-height: 2;
    max-width: 38em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 20px;
  }

  .form-input,
  .submit-btn,
  .form-textarea {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
  }
  .form-input,
  .form-textarea {
    color: var(--clr-grey-3);
    border-radius: var(--radius);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  .submit-btn {
    border-top-right-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  .form-input::placeholder,
  .form-textarea::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }
  .error {
    color: #d32f2f;
    margin-top: -12px;
    margin-bottom: -6px;
  }
  .submit-btn {
    background: var(--clr-primary-5);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-white);
  }
  .submit-btn:hover {
    color: var(--clr-primary-1);
    background: var(--clr-primary-7);
  }
  @media (min-width: 992px) {
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 768px) {
    p {
      width: 30em;
    }
    .contact-form {
      margin-top: -50px;
    }
  }
`;

export default ContactPage;
