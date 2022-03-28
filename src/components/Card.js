import React from "react";
import styled from "styled-components";
import { BsFillHeartFill } from "react-icons/bs";
const Card = ({ title, img, hearts }) => {
  return (
    <Wrapper>
      <img src={img} alt={title} className="img" />
      <div className="card-detail-top">
        <h4>{title}</h4>
        <div className="ic">
          <BsFillHeartFill />
          <span>{hearts}</span>
        </div>
      </div>

      <div className="card-detail-mid">
        <div>
          <p>
            Current Bid<span>1.2 ETH</span>
          </p>
        </div>
        <div>
          <p>
            Ending In<span>1d:12h:10m</span>
          </p>
        </div>
      </div>

      <div className="card-detail-bottom">
        <button className="my-btn fr-btn">place a bid</button>
        <button className="my-btn sec-btn">history</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  border-radius: var(--borderRadius);
  background: #252041;
  overflow: hidden;
  max-width: 17rem;
  padding-bottom: 1.2rem;
  margin: 0.85rem 0.55rem;
  .card-detail-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.3rem 0.6rem;
    h4 {
      margin-bottom: 0;
      color: #e9e9ec;
    }

    .ic {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        color: #b1147d;
        text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
        font-size: 0.8rem;
      }
      span {
        color: #e9e9ec;
        margin-left: 0.4rem;
        font-size: 1rem;
        font-weight: bold;
      }
    }
  }

  .card-detail-mid {
    text-align: center;
    column-rule: 1px solid #adabb8;
    columns: 2;
    gap: 1em;
    margin: 0.8rem 0rem;
    padding: 0 0.7rem;
    p {
      margin-bottom: 0;
      color: #adabb8;
      font-size: 0.8rem;
      span {
        display: block;
        color: #b1147d;
      }
    }
  }
  .card-detail-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.3rem 1rem;
    button {
      font-size: 0.77rem;
    }
  }
  @media (max-width: 768px) {
    max-width: 37rem;
  }
`;
export default Card;
