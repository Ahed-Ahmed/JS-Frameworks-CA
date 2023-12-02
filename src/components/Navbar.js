import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import SearchResults from "./SearchResults";
const Nav = () => {
  // const [search, setSearch] = useState("");
  const { openSidebar, products, search, setSearch, clearSearch } =
    useProductsContext();
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="nav-container" onClick={clearSearch}>
      <NavContainer>
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <h2>eShop.no</h2>
            </Link>
            <button type="button" className="nav-toggle" onClick={openSidebar}>
              <FaBars />
            </button>
          </div>

          <div className="search-container">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={handleSearch}
            />
            <FaSearch />
            {search && (
              <SearchResults
                products={filteredProducts}
                setSearch={setSearch}
              />
            )}
          </div>
          <CartButtons setSearch={setSearch} />
        </div>
      </NavContainer>
      <ul className="nav-links" onClick={() => setSearch("")}>
        {links.map((menu) => {
          const { id, text, url } = menu;
          return (
            <li key={id} className="nav-items">
              <Link to={url} className="nav-link">
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    color: var(--clr-primary-5);
    text-transform: none;
  }
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    min-width: 225px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  .search-container {
    width: 70%;
    position: relative;
    margin: auto;
  }

  .search-container input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid var(--clr-grey-3);
    border-radius: 5px;
  }

  .search-container svg {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      justify-items: center;
    }
    .nav-links {
      background-color: var(--clr-primary-5);
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
    .search-container {
      grid-column: 2 / 3;
      margin: 0;
    }
  }
`;

export default Nav;
