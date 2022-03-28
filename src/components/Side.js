import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import links from "../data";
import { NavLink } from "react-router-dom";
import { BiWalletAlt, BiDollar } from "react-icons/bi";
const Side = () => {
  return (
    <Wrapper>
      <div className="aside-top">
        <img src={logo} alt="logo-img" className="img logo-img" />
      </div>

      <div className="aside-links">
        {links.map((link) => {
          const { id, icon, path } = link;
          return (
            <NavLink
              to={path}
              key={id}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <span className="icon">{icon}</span>
            </NavLink>
          );
        })}
      </div>

      <div className="aside-bottom">
        <BiDollar />
        <BiWalletAlt />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  height: 100vh;

  background-color: #19162c;
  width: 6.2rem;
  /* width: 100%; */
  display: flex;
  align-items: center;
  flex-direction: column;

  position: sticky;
  top: 0;

  /* black box shadow by the side */
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  .aside-top .logo-img {
    width: 3rem;
    padding-top: 1.7rem;
  }

  /* links */

  .aside-links {
    padding-top: 1.7rem;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: all 0.4s ease-in-out;
    .nav-link {
      margin: 0.8rem 0;
      color: #8c8a95;
      font-size: 1.5rem;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        top: 0.6rem;
        left: -2.4rem;
        height: 1.2rem;
        width: 0rem;
        border-radius: 50%;
        background: #b1147d;
      }
      &:hover {
        color: #b1147d;
        transition: all 0.4s ease-in-out;
        &::before {
          width: 1.2rem;
          transition: all 0.4s ease-in-out;
        }
      }
    }
    .active {
      &::before {
        width: 1.2rem;
      }
      color: #b1147d;
    }
  }
  /* last */

  .aside-bottom {
    /* push to bottom */
    margin-top: auto;
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    color: #8c8a95;
    svg {
      margin: 0.8rem 0;
    }
  }
  @media screen and (max-width: 520px) {
    min-width: 4.2rem;
    width: 4.2rem;
  }
`;
export default Side;
