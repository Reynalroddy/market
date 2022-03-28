import React from "react";
import styled from "styled-components";
import Banner from "../assets/1.jpg";
import Card1 from "../assets/card1.jpg";
import Card2 from "../assets/card2.jpg";
import Card3 from "../assets/card3.jpg";
import Card4 from "../assets/card4.jpg";
import Card5 from "../assets/card5.jpg";
import Card6 from "../assets/card6.jpg";
import Card from "./Card";
import TopSeller from "./TopBoys";
const Main = () => {
  return (
    <Wrapper>
      <div className="left">
        <div
          className="banner"
          style={{
            background: `url(${Banner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="textContent">
            <h1>Round Hall</h1>
            <h2>1.5 ETH</h2>
            <p>Uploaded by Alexander Vernof</p>
            <div className="bid">
              <button className="my-btn">Bid Now</button>
              <p>
                Ending In <span>2d:15h:20m</span>
              </p>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="filters">
            <div className="popular">
              <h4>feeds</h4>
              <button className="my-btn sec-btn">popular</button>
            </div>
            <div className="btnzz">
              <button className="my-btn fr-btn">All</button>
              <button className="my-btn sec-btn">illustration</button>
              <button className="my-btn sec-btn">art</button>
              <button className="my-btn sec-btn">games</button>
            </div>
          </div>

          <div className="card-main">
            <Card img={Card1} title="guy" hearts="65" />
            <Card img={Card2} title="guy" hearts="65" />
            <Card img={Card3} title="guy" hearts="65" />
            <Card img={Card4} title="guy" hearts="65" />
            <Card img={Card5} title="guy" hearts="65" />
            <Card img={Card6} title="guy" hearts="65" />
          </div>
        </div>
      </div>

      <div className="right">
        <div className="right-top">
          <div className="topCard_name">
            <h2>Statistics</h2>
            <button className="my-btn">View More</button>
          </div>

          <div className="earning">
            <p>
              Artwork Sold <span>187</span>
            </p>

            <p>
              Artwork Canceled <span>5</span>
            </p>

            <p>
              Artwork Pending <span>25</span>
            </p>

            <p>
              Artwork Delivered <span>200</span>
            </p>

            <p>
              Total Earning <span>262 ETH</span>
            </p>
          </div>
        </div>

        <div className="right-bottom">
          <div className="bottomCard_name">
            <h2>Top Seller</h2>
            <button className="my-btn">View More</button>
          </div>

          {TopSeller &&
            TopSeller.map((seller) => (
              <div className="topSeller" key={seller.id}>
                <div className="topSellerImg">
                  <img src={seller?.imgSrc} alt="" className="img" />
                </div>
                <div className="topSellerName">
                  <p>
                    {seller?.seller_name} <span>{seller?.username}</span>
                  </p>
                </div>
                <button className="my-btn">View More</button>
              </div>
            ))}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  padding-top: 0.9rem;
  height: calc(100% - 2.4rem);
  /* justify-content: space-between; */
  .left {
    width: calc(100% - 30%);
    overflow-y: scroll;
    transition: all 0.4s cubic-bezier(0.17, 0.81, 0.38, 1.39);
    &::-webkit-scrollbar {
      display: none;
    }

    .banner {
      height: 16rem;
      border-radius: var(--borderRadius);
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
      position: relative;
      .textContent {
        position: absolute;
        right: 1.3rem;
        bottom: 1.3rem;
      }
      h1,
      h2,
      p {
        margin-bottom: 0.5rem;
      }
      h1 {
        color: #f1f1f1;
      }
      h2 {
        color: #b1147d;
      }

      p {
        color: #f1f1f1;
      }
      .bid {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        button {
          text-transform: uppercase;
          background: linear-gradient(#ff21bc, #b21783);
          box-shadow: inset 2px 2px 2px rgba(255, 255, 255, 0.4),
            inset -5px -10px 10px #b1147d;
        }
        p {
          margin-bottom: 0;
        }
        span {
          display: block;
          color: #b1147d;
        }
      }
    }

    .cards {
      background: #19162c;
      padding: 0.6rem;
      margin-top: 1.2rem;
      border-radius: var(--borderRadius);
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
      .filters {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.6rem 1.7rem;
        flex-wrap: wrap;
        gap: 0.3rem;
        .popular {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          flex-wrap: wrap;
          h4 {
            margin-bottom: 0;
            color: #d1cfd4;
          }
        }
        .btnzz {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
      }

      .card-main {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 0.6rem;
        /*  display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap; */
      }
    }
  }

  .right {
    width: calc(100% - 70%);
    padding: 0rem 0.6rem;
    padding-left: 1.3rem;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    p {
      margin-bottom: 0;
    }
    .right-top {
      background: #19162c;
      border-radius: var(--borderRadius);
      padding: 0.6rem 1.3rem;
      .topCard_name {
        display: flex;
        align-items: center;
        justify-content: space-between;
        h2 {
          margin-bottom: 0;
          color: #d1d0d5;
        }
      }
      .earning {
        padding: 0.5rem 0.8rem;
        p {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.55rem;
          color: #adabb8;
          font-weight: bold;
          font-size: 0.87rem;
          padding: 0.37rem;
          &:nth-child(odd) {
            background: #211d3a;
            border-radius: var(--borderRadius);
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
          }
          &:nth-child(5) {
            span {
              color: #b21783;
            }
          }
        }
      }
    }

    .right-bottom {
      background: #19162c;
      border-radius: var(--borderRadius);
      padding: 0.6rem 1.3rem;
      margin-top: 1.2rem;
      .bottomCard_name {
        display: flex;
        align-items: center;
        justify-content: space-between;
        h2 {
          margin-bottom: 0;
          color: #d1d0d5;
        }
      }
      .topSeller {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 0.3rem;
        .topSellerImg {
          width: 2.4rem;
          height: 2.4rem;
          img {
            border-radius: 50%;
            height: 100%;
          }
        }
        .topSellerName {
          /* width: 100%; */
          color: #adabb8;
          /* margin-left: 0.6rem; */
          span {
            display: block;
            font-size: 0.67rem;
          }
        }
      }
    }
  }

  .fr-btn {
    background: linear-gradient(#ff21bc, #b21783);
    box-shadow: inset 2px 2px 2px rgba(255, 255, 255, 0.4),
      inset -5px -10px 10px #b1147d;
  }
  .sec-btn {
    border: 2px solid #443b78;
    background: transparent;
  }
  @media (max-width: 1000px) {
    .right {
      button {
        font-size: 0.67rem;
      }
    }
  }
  @media (max-width: 992px) {
    .left .cards .card-main {
      grid-template-columns: 1fr 1fr;
      gap: 0.6rem;
    }
    .left {
      width: calc(100% - 40%);
    }
    .right {
      width: calc(100% - 60%);
      /* padding: 0rem 1.3rem; */
      button {
        font-size: 0.67rem;
      }
    }
    .right .right-bottom .topSeller .topSellerImg {
      width: 25px;
      height: 25px;
    }
    .right .right-bottom .topSeller .topSellerName {
      p {
        font-size: 0.65rem;
      }
    }
  }

  @media (max-width: 768px) {
    .left .cards .card-main {
      grid-template-columns: 1fr;
      gap: 0.6rem;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    /* height: auto; */
    .left,
    .right {
      width: 100%;
    }
    .left .cards .filters .btnzz {
      display: none;
    }
    .right {
      padding: unset;
      margin-top: 1.2rem;
    }
  }
`;

export default Main;
