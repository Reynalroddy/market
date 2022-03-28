import React, { useState } from "react";
import styled from "styled-components";
import { BiSearchAlt } from "react-icons/bi";
import { FaBell, FaChevronDown } from "react-icons/fa";
import women from "../assets/women.jpg";
/*import { Container, Row } from "react-bootstrap";
import logo from "../assets/logo.png";
import flag from "../assets/flag.png";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import { FiLock } from "react-icons/fi";
import { links } from "../data"; */
const Navbar = () => {
  const [showDrop, setShowDrop] = useState(false);
  /* useEffect(() => {
    const mouseTarget = document.getElementById("menuChevron");
    const menuContainer = document.getElementById("menuContainer");
    mouseTarget.addEventListener("mouseenter", () => {
      mouseTarget.style.transform = "rotate(180deg)";
      menuContainer.style.marginRight = "0rem";
    });

    menuContainer.addEventListener("mouseleave", () => {
      mouseTarget.style.transform = "rotate(0deg)";
      menuContainer.style.marginRight = "-18rem";
    });
  }, []); */

  const handleClick = () => {
    setShowDrop(!showDrop);
    console.log("guy");
  };
  return (
    <Wrapper>
      <div className="input-box">
        <input type="text" placeholder="Search items, collections" />
        <div className="inp-icon">
          <BiSearchAlt />
        </div>
      </div>

      <div className="profile">
        <div className="noti-icon">
          <FaBell />
        </div>

        <div className="profileImage">
          {" "}
          <img src={women} alt="" className="img" />{" "}
        </div>

        <p className="profileName">Olivia Christine</p>
        <div
          className={showDrop ? "menuChevron showzz" : "menuChevron"}
          id="menuChevron"
          onClick={handleClick}
        >
          <FaChevronDown />
        </div>
        <div
          className={showDrop ? "menuContainer showz" : "menuContainer"}
          id="menuContainer"
        >
          <ul>
            <li>Web design</li>
            <li>UI / UX</li>
            <li>Form Design</li>
            <li>UI design</li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
  /* height: 4rem; */
  background-color: var(--bg-color);

  /* overflow-x: hidden; */
  .input-box {
    width: 20rem;
    max-width: 20rem;
    height: 2.4rem;
    position: relative;
    input {
      width: 100%;
      background: #19162c;
      height: 100%;
      border: none;
      outline: none;
      border-radius: var(--borderRadius);
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
      color: var(--white);
      font-size: 1rem;
      padding: 0rem 2.5rem;
    }

    .inp-icon {
      width: 2.5rem;
      height: 2.4rem;
      position: absolute;
      top: 0;
      left: 0;
      font-size: 1.3rem;
      color: var(--grey-400);
      text-align: center;
      line-height: 2.4rem;
      svg {
      }
    }
  }

  .profile {
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    position: relative;
    .noti-icon {
      width: 2.1rem;
      height: 2.1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #19162c;
      border-radius: var(--borderRadius);
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
      position: relative;
      svg {
        font-size: 1.1rem;
      }
      &::before {
        content: "";
        position: absolute;
        height: 0.3rem;
        width: 0.3rem;
        top: 0.4rem;
        right: 0.6rem;
        background-color: red;
        border-radius: 50%;
      }
    }

    p {
      margin-bottom: 0;
      font-size: 0.89rem;
    }

    .profileImage {
      width: 2.1rem;
      height: 2.1rem;
      margin: 0 0.4rem;
      img {
        border-radius: 50%;
        height: 100%;
      }
    }

    .menuChevron {
      font-size: 0.89rem;
      cursor: pointer;
      margin: 0 0.4rem;
      transform: rotate(0deg);

      transition: transform 0.4s ease;
    }
    .showzz {
      transform: rotate(180deg);
    }

    .menuContainer {
      position: absolute;
      right: 0.4rem;
      top: 3rem;
      background: #19162c;
      border-radius: var(--borderRadius);
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
      width: 11.3rem;
      z-index: 2;
      transform: scale(0.9);

      /* margin-right: -18rem; */
      transition: opacity 0.4s cubic-bezier(0.17, 0.81, 0.38, 1.39);
      opacity: 0;
      &::after {
        content: "";
        position: absolute;
        right: 0.6rem;
        top: -0.4rem;
        width: 0.6rem;
        height: 0.6rem;
        background: #19162c;
        transform: rotate(45deg);
      }
      ul {
        width: 100%;
        height: 100%;
        li {
          margin: 0.3rem 0;
          width: 100%;
          padding: 0.5rem 1.4rem;
          cursor: pointer;
          color: #757380;
          text-align: left;
          &:hover {
            background-color: #121026;
            color: #f1f1f1;
            transition: all 0.3s ease-in-out;
          }
        }
      }
    }
    .showz {
      transform: scale(1);
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    .input-box {
      width: 7.5rem;
      z-index: 101;
      input {
        &:focus {
          width: 18rem;
          transition: width 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
      }
    }
  }
`;
export default Navbar;
