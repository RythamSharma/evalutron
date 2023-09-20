import React from "react";
import logo from "./logo.png";
import body from "./body.png";
import Card from "./Card";
import practice from "./practicer.png";
import learning from "./learning.png";
import mock from "./mock.png";
import result from "./result.png";
import body2 from "./body2.png";
import body3 from "./body3.png";
import body4 from "./body4.png";
import body5 from "./body5.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function home() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="logo" style={{ width: "130px" }} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Learn
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Overview
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Help
                  </a>
                </li>
                <li className="signup">
                  <button className="btn btn-outline-dark"> Sign Up</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="body-container" style={{ position: "relative" }}>
        <img id="body" src={body} alt="" />
        <Link to='/logintea'>
        <button
          style={{
            position: "absolute",
            top: "41.276041666666664vw",
            left: "6.4453125vw",
          }}
          className="body-btn"
        >
          Teacher
        </button>
        </Link>
        <Link to="/studentchoice">
          <button
            style={{
              position: "absolute",
              top: "41.276041666666664vw",
              left: "29.036458333333332vw",
            }}
            className="body-btn"
          >
            Student
          </button>
        </Link>
      </div>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-3">
            <Card description="Practice" img={practice} />
          </div>
          <div className="col-md-3">
            <Card description="Mock Test" img={mock} />
          </div>
          <div className="col-md-3">
            <Card description="E-Learning" img={learning} mar="63px" />
          </div>
          <div className="col-md-3">
            <Card description="Result" img={result} />
          </div>
        </div>
      </div>
      <div>
        <img id="body2" src={body2} alt="" />
        <button
          style={{
            position: "absolute",
            top: "123.76302083333333vw",
            left: "57.747395833333336vw",
          }}
          className="body2-btn"
        >
          Get Started
        </button>
      </div>
      <div>
        <img id="body3" src={body3} alt="" />
        <button
          style={{
            position: "absolute",
            top: "183.26822916666666vw",
            left: "2.6692708333333335vw",
          }}
          className="body3-btn"
        >
          Get Started
        </button>
      </div>
      <div>
        <img id="body4" src={body4} alt="" />
        <button
          style={{
            position: "absolute",
            top: "225.06510416666666vw",
            left: "59.1796875vw",
          }}
          className="body4-btn"
        >
          Get Started
        </button>
      </div>
      <div>
        <img id="body5" src={body5} alt="" />
        <button
          style={{
            position: "absolute",
            top: "272.3307291666667vw",
            left: "4.166666666666667vw",
          }}
          className="body5-btn"
        >
          Get Started
        </button>
      </div>
      <Footer />
      <div style={{ backgroundColor: "#2e2a73", marginTop: "1px" }}>
        <p
          style={{
            color: "black",
            fontSize: "30px",
            padding: "40px",
            display: "inline-block",
          }}
        >
          Evalutron 2023-2055 All rights reserved
        </p>
        <div style={{ float: "right", display: "inline-block" }}>
          <img
            className="social"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAmdJREFUSEuVVoFx4zAMgyZpMknzkzSepO0kbSfp/yTvTdSDRNukSCqu7nKxLYkkQJBSgRoFQG3vx5N/2zbYNdrO8Zzb4Ywdem327KItKKgStEy6uHwQYbBtWQZqanSOsjPaOd2Zje0FaAJQcaBiMTBsHB9B2A3a6DQT07TbnT7HsUpGvY2rXgtwr8AFwF8AX/K/Cpg7avve30lygOAbwFKAdctHFgu6ow8AtwAsHfF3l/1XrXbjWAz9lw0LClYrVRcCg7ztX+NEryh4Ry0rUBmIEtdhj9ERAQcXLUBZXan0eaJlkMPQYmyR0DEbxNWwOwTJ6IlCjzfJ2Z4fmXwFwDnN4NaB9FfuWwTIjjcSF1EQjWWwM/AuAqEx71jRqOr1rTaqLRrjWKigQVJunHe6jIToXNbYWh+WkhUG7MjRpUKHL2LQOg5yGfHqzVfS/DnSN1Id5bjvcXWXdSUX4R+bXzEX1J/LsTMV5DJZw3RcfdBbr7ZKuqDiuwCX9JCY0m6gUJBE7DKcHRJbR+J/z3VAzQn2Q5o3cxFLFBnVfaHHo4FY79Mzoffl3iaToCPHRMlGMij7gSub+4Y22zE7nRLnmdTMd6ndXPnKcbqIJcbavj9MdPetBJUJg+lTIz5c2qGxHW0J3D3oT9TWl/Oh8O2LCnCTw/yplVPmMAayVN2hRFVNmCfEtdHK/wctc4+X7XCOMsCfiYuOn2U9bxdEz9Li2bzWfkH4Z3rwmLLEmb1lnhJq1H2Gu7QTzDzVp4RgjtNpOZ+v9ZCU5LrzS27yPqsue67zPnSSlF/UIZ0tL64z/rPTwbbM0NmWsh9vseElA9f2kgAAAABJRU5ErkJggg=="
            alt="."
          />
          <img
            className="social"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAv5JREFUSEulV1uW2jAMvVpJMysZWEg70I3ArCTQjUD729/+k65EPVeWE9mxw7T1OZCZ2Nbj6uqBoLMEgNpXPOAvfFOgvh0PCpb3QLmTxQlkJbthyHImKu6Z3BdQG9GX0DZ3Pr+5vYlWQuKpYpcxAODn2bpvhs83O4rnOJ0A7PyzyNtGYnIKXKB4713qebwTYNTFw8kF5OeW1zQ0LxqxV2AqadaH+uGwEjZa3YUvawgEHIy7ghEqO0Bp7EtpKRGtqWIXcHBl+2cBbex/RnLoB4DRw3QBcOyy2jeyt7RyA9pmIlLpNzfm6Pdv/gxeFx7PthtOVj7KeuEIYlDgDXAYBRNUrg7pFwBXl/QVAJXSEYO78Lhyf1DBA4q7k6JG8iTAOVW0opiQRBdNfGCYuPkLwE9TLBigYNhmrhQxFuhOzUq5A7ov6h3A1Dq7JXz+9r9fATl4MTwD8m4lczGOXpPpPcUmhgd4kJZFYrFwEDKuWUBwPN0z2MHYxiwoFQegIq/d46jYislJzVu5CPTYaR4jBAeooeKFw+7e9D88ZlowdvSGqbFaAjSNBvRfoY5Wyx5Qh7Fsf24YDbScDfyYFQtwnzlZsbphtTnnxJILoPS6tTIqAWo75ord6FaMI7mqdIrkojdsAHGxtjOWC/l6rF4rtjdNVvvZAyCjpw3h/G5qBJ9IKD9TpZMl9CM1mxim3CQWvLNnRTqFfvwWcrmG2yEuCgvPzCVYgCnWnbljCawcWokT4CVBVwqyM4IdFK9LB5OrQKeMfuhUTCf190ULXv2TKhcYM/ZRY3AUtEx/zSZRo8AUJOmqWt1qi0tprKtXYUKH2XYmTJk5lVKKhVKVPC5zaoDKDVDGuz0IrMK4MoN3cy/2QWAVsmYd4hRBa/NwN48+68aU7gfbi9HHPV1NMGmu9q84iLtSsjgNe+0zAbxi9qehhDcMe6WDBbn6cTPPPzLaUkRnPlv/wmjq+xBne/4GiTE02+TacLvmYRRU/chqSHGPO7V6HYg8gfUM+gto4tE/8NhFNdynIeIAAAAASUVORK5CYII="
            alt="."
          />
          <img
            className="social"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAnVJREFUSEutV4FxwzAIfDZJNnE2cSZpMomzSbJJvYl6ICyBhGonre7a5FzE8/CAS+BDAJJ889/tI2szNtW/7H+wu/fdBEGMgh6F0AMfYb+TiRjMR2uAi/kJAP8cOx17feCfv1pnDlhsCYl/yUdXhFGOgxh95lYknK0VNa4mAM+isVHaD+M7wwsAZc7E/CnA5vFaU/+GqnrTDKxpbcU1gfAsOQYeAK4KvAA0Sd/tCNCltHbqhYBXKV/1IXWdkk81l3o7XwBuXTWVQR0Ew3obxjl2eyzjFYQrktaFsCBhPlzeHt8zto1PQGGs97i+nG4O8eZl7tsmzv6n4uq8+TY71ujFakfVKi7FZGNmzYdrPGsG7vrsBMIXEu4qnG3wLACmZvAb4KjGKi51zE2/AbMzrvEtEe6adm4/6c2m9hyAgm+M6QKkMsH2+rgDVmULYyNoBmIxyuhThc8ALWbtZWAjDTsYdYCUy2eAVr0sjDtgYUYzIa0p9/xLbzfDaMhYzL0x4Yw0BtaIa6fnPq/1B76NAEc1tsCWcVDjznmxl0mnGT8hKXB+YGq8N6uFsQe2qdZRalk9ALpqabju+W85rr+ommYglXQScErqXDlXxnmn98C9uCS2di3+D+NM+8NUy6xWxrWPCyut6wNJlM2nMrbAG2O7nUTVfi3+Orkk1d6eB4QBpmddo007NeN4ahzVmeR3gt0t3cgerOvRrA76+I0t0K3LPlD/BhLMWNseDXSwnTrEINpsY8YvoX3Z20SRt0ywFu2rTx3NHj1g//JvTG6AHAndsjliP97ffHv88hb4riztbgn+5dqJKwMHGo3vBSm1IgqUP9LnD8lAMDiMUOQEAAAAAElFTkSuQmCC"
            alt="."
          />
          <img
            className="social"
            style={{ marginRight: "50px" }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAq9JREFUSEulVott6zAMPE5SZ5KXTPLiSZpMEr9Jkk2aTsIHSpRFSpRcoAIKpNbneNTxRMIvBgHgYH/3PVgon4BgJYH9oSOUaeC6ye41nxSYYMHSfBzQwsAZwAeAb8V9A3jl3/6cmFiGDBk3SVwA/AVwqwQVoEb4BuEFpn8EfvVX4Flk4PEIAEugQf7yOYX9HaD3SAUz4AWEJ5iWeLNPVCABCeCigXTUBsAJ7KtPxIGOuyQkxmu+/2Gq3cQTWUBHQ1htuugbhA8wzgScszCTDt6szNu4/OGEBxjXGNFt3ZRNo066AvxoFC7BCfN9tKkWls+wJHSLEnmB0/3Zr+UfCfpRMquhSmY05SUkT00ijdn6wl4BEsYWWCpgAegPwLcGWNZJne/BtoxFULI5m+HYrU6NWp0mBtuEtexLg+oiOgMsB/xkpIANQNFSZHf2vEs2meJceSrfzXTsdtgBt8IZPB4raxWYVHs1Nvc3KcMEGeF0XkzAjYF7k2p8ei921N399BJwZfYAOBBoytbKhC3Vt9mipRTmegce623fpwI1KqhaPXHycgmizks5qE129ibucwrVXh2qPKODtO9I5kfFGVmlME53o7u2pksQtyqzWaBBagggW/k2t+I413HrsZ8mZ9jGwbAMGoGMYGyzpLpCm3Qf1JWbJu5apb6+TgTIlWmX0p6fGR/Us2qj5p6nTke4gXEfvk46IawFOHgWbapdxENBKcvdKqtMjGKMQAT8CcISWna+RjNEM8Xbnc93r9IRsMwL+CeQHK2/EO8i5eqsV0vXcZm1TTMV1WbPPouWcf6eGdexgbCOjLRU21S+ukh6aWlv5d7lL3okShtU692Vc2dKFdc8kWPfz1cgIHYsSURTP50AH1L3tWuahTGib1xqCtoOJNZ4GNEPngsr4Uaf/wEOcw8zuZxPeQAAAABJRU5ErkJggg=="
            alt="."
          />
        </div>
      </div>
    </>
  );
}