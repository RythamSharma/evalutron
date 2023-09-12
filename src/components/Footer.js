import React from "react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#2e2a73" }}>
      <div className="container">
        <div className="row">
          <div className="col" style={{ padding: "100px" }}>
            <h4 className="foot">PLATFORM</h4>
            <ul className="foot1">
              <li>
                <a className="foot2" href="/">
                  Overview
                </a>
              </li>
              <li>
                <a className="foot2" href="/">
                  Features
                </a>
              </li>
              <li>
                <a className="foot2" href="/">
                  About
                </a>
              </li>
              <li>
                <a className="foot2" href="/">
                  Learn
                </a>
              </li>
            </ul>
          </div>
          <div className="col" style={{ padding: "100px" }}>
            <h4 className="foot">HELP</h4>
            <ul className="foot1">
              <li>
                <a className="foot2" href="/">
                  How deos it work?
                </a>
              </li>
              <li>
                <a className="foot2" href="/">
                  where to ask questions?
                </a>
              </li>
              <li>
                <a className="foot2" href="/">
                  What is the need?
                </a>
              </li>
            </ul>
          </div>
          <div className="col" style={{ padding: "100px" }}>
            <h4 className="foot">Contacts</h4>
            <ul className="foot1">
              <li>
                <a className="foot2" href="/">
                  GLA University
                </a>
              </li>
              <li>
                <a className="foot2" href="/">
                  NH2 Chaumuha
                </a>
              </li>
              <li>
                <a className="foot2" href="/">
                  Mathura 281001
                </a>
              </li>
              <li>
                <a className="foot2" href="/">
                  +91-1210569874
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
