import ReactDOM from "react-dom";
import "./content.css";
import React from "react";

interface HTMLElementTagNameMap {
  "pilot-wrapper": Pilot;
}

const rootElement = document.documentElement;
// const pilotWrapper = document.createElement("div");
// rootElement.insertBefore(pilotWrapper, rootElement.firstChild);

console.log("ok?");

class Pilot extends HTMLElement {
  constructor() {
    super();
    return;
  }
}
const pilotWapper = new Pilot();
const shadowRoot = pilotWapper.attachShadow({ mode: "open" });

customElements.define("pilot-wrapper", Pilot);
rootElement.insertBefore(pilotWapper, rootElement.firstChild);

// export const Wrapper = () => {
//   return <div className="example-container">Hello from Shadow DOM!</div>;
// };

export const Wrapper = () => {
  return <div className="example-container">안녕하세용</div>;
};

customElements.whenDefined("pilot-wrapper").then(() => {
  ReactDOM.render(<Wrapper />, shadowRoot);
});
